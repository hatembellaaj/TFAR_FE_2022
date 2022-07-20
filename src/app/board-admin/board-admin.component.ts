import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/model/user';
import { Organisme } from 'src/model/organisme';
import { Departement } from 'src/model/departement';
import { OrganismeService } from '../services/organisme.service';
import { UserService } from '../_services/user.service';
import { DepartementService } from '../services/departement.service';
import { UserDialogComponent } from '../dashboard/user/user-dialog/user-dialog.component';
import { UserDtDialogComponent } from '../dashboard/user/user-dt-dialog/user-dt-dialog.component';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit ,AfterViewInit, DoCheck{
  users$!: Observable<User[]>;
  organismes$!: Observable<Organisme>;
  departements$!: Observable<Departement[]>;
  dataSource!: MatTableDataSource<User>;
  displayedColumns: string[] = ['code', 'role', 'type', 'nom', 'prenom', 'grade', 'gouvernorat', 'adresse', 'tel', 'email', 'poste', 'fax', 'organisme',
    'departement', 'detail', 'update', 'delete'];
  searchKey!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  bool: boolean = false;
  selectedOrganisme:any;
  selectedDepartement:any;

  content?: string;

  constructor(private dialog: MatDialog, private userService: UserService, private _snackBar: MatSnackBar,
    private organismeService: OrganismeService, private departementService: DepartementService) { }

  ngOnInit(): void {
    this.getData();
    this.organismeService.getAllOrganismes().subscribe(data => this.selectedOrganisme = data[0].code);
    this.departementService.getAllDepartements().subscribe(data => this.selectedDepartement = data[0].code);

  }

  ngDoCheck() {

    if (this.bool == true) {

      this.getData();
      this.bool = false;

    }
  }

  ngAfterViewInit(): void {
    this.sort1();
    this.paginator1();
    this.getAllusers();
  }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, { duration: duration });
  }

  sort1() {
    if (this.dataSource != undefined) {
      this.dataSource.sort = this.sort;
    }
  }

  paginator1() {
    if (this.dataSource != undefined) {
      this.dataSource.paginator = this.paginator;

    }

  }



  getData() {
    this.userService.getAllUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.sort1();
      this.paginator1();

    });
  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data={codeOrganisme:this.selectedOrganisme,codeDepartement:this.selectedDepartement} as User;
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != undefined) {


        console.log(result, "zouari");
        console.log(result.code);
        console.log(result.nom);

        this.userService.saveUser(result).subscribe(
          res => {
            console.log(res);
            this.bool = true;

          },
          err => {
            console.log(err.message);
          }
        );
      }
    });

  }

  onDelete(user: User) {

    this.userService.deleteUser(user).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err.message);
        this.bool = true;
        console.log(err.status)
        if (err.status == 500) {
          this.openSnackBar("You must delete the associated fiche before delete", "Delete fail", 2800);

        }


      }
    );
    console.log("ondelete!!!!")
    console.log(user, "aaaaaa");
  }


  onDetails(user: User) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data=user;
    console.log("[" + user.codeOrganisme + ", " + user.codeDepartement + "]uuuu");
    const dialogRef = this.dialog.open(UserDtDialogComponent, dialogConfig);
    console.log(user,'oooooo');


  }


  onUpdate(user: User) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    console.log(user, "xxxxxxxxxxxxxxx");
    console.log(user.codeOrganisme, "eeeeeeee");
    console.log(user.codeDepartement, "ffffffffffffff");
    dialogConfig.data=user;
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed update');
      if (result == undefined) {

        console.log("vous avez clicker sur cancel");
      }
      else if (result.code == user.code) {

        console.log("rrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(result.code);
        console.log("update sucsess");
        console.log(user.code);

        this.userService.updateUser(result).subscribe(
          res => {
            console.log(res);
            this.bool = true;

          },
          err => {
            console.log(err.message);

          }
        );

      }

    });

  }

  getAllusers() {

    this.users$ = this.userService.getAllUsers().pipe(map(data => {
      console.log(data); return data
    }));

  }

  dddd(element: any) {
    console.log(element, "aqwaqwaqw");
  }


  getAllDepartements() {
    this.departements$ = this.departementService.getAllDepartements().pipe(map(data => {
      console.log(data); return data
    }));
  }



}
