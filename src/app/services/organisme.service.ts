import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Organisme } from 'src/model/organisme';

@Injectable({
  providedIn: 'root'
})
export class OrganismeService {
  private baseUrl = environment.host;

  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY0NzcxNjQ2N30.gPzIrGjGs2Yf4hPW7oKjpMzuIg0z1kiG6X_-4O0ZYcELEDvIcz7wJCdc2oaKYUSjeMgDa6hZX4UlV7vi6oBxgA";

  headers!: HttpHeaders;

     constructor(private http: HttpClient) {
     console.log(this.auth_token);
     this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
     console.log("salut test ...... ");

   }


  getAllOrganismes(): Observable<Organisme[]>{
    return this.http.get<Organisme[]>(this.baseUrl+"/api/organismes/findAll", { headers: this.headers });
  }

  getOrganismeById(id:number): Observable<Organisme>{
    return this.http.get<Organisme>(this.baseUrl+"/api/organismes/find/"+id, { headers: this.headers });
  }

  saveOrganisme(organisme: Organisme): Observable<Organisme> {
    return this.http.post<Organisme>(this.baseUrl+"/api/organismes/save",organisme,{ headers: this.headers });
  }

  updateOrganisme(organisme: Organisme): Observable<Organisme> {
    return this.http.put<Organisme>(this.baseUrl+"/api/organismes/save/"+organisme.code,organisme,{ headers: this.headers });
  }

  deleteOrganisme(organisme: Organisme): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/organismes/delete/"+organisme.code,{ headers: this.headers });
  }



}




