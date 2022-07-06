import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Chart } from 'chart.js';
import { FicheService } from 'src/app/services/fiche.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit, DoCheck {

  varf: any;
  varf1: any;
  varp:any;
  varp1:any;

  PieChart: any;
  BarChart: any;

  PieChart1: any;
  BarChart1: any;

  PieChart2: any;
  BarChart2: any;

  PieChart3: any;
  BarChart3: any;

  PieChart4: any;
  BarChart4: any;

  PieChart5: any;
  BarChart5: any;

  PieChart6: any;
  BarChart6: any;

  PieChart7: any;
  BarChart7: any;

  PieChart8: any;
  BarChart8: any;

  PieChart9: any;
  BarChart9: any;

  PieChart10: any;
  BarChart10: any;

  PieChart11: any;
  BarChart11: any;

  PieChart12: any;
  BarChart12: any;

  PieChart13: any;
  BarChart13: any;

  PieChart14: any;
  BarChart14: any;

  PieChart15: any;
  BarChart15: any;

  PieChart16: any;
  BarChart16: any;

  PieChart17: any;
  BarChart17: any;

  PieChart18: any;
  BarChart18: any;

  PieChart19: any;
  BarChart19: any;

  PieChart20: any;
  BarChart20: any;

  PieChart21: any;
  BarChart21: any;

  PieChart22: any;
  BarChart22: any;

  PieChart23: any;
  BarChart23: any;

  PieChart24: any;
  BarChart24: any;

  PieChart25: any;
  BarChart25: any;

  PieChart26: any;
  BarChart26: any;

  PieChart27: any;
  BarChart27: any;

  PieChart28: any;
  BarChart28: any;

  PieChart29: any;
  BarChart29: any;
  PieChart30: any;
  BarChart30: any;
  PieChart31: any;
  BarChart31: any;
  PieChart32: any;
  BarChart32: any;
  PieChart33: any;
  BarChart33: any;
  PieChart34: any;
  BarChart34: any;
  PieChart35: any;
  BarChart35: any;
  PieChart36: any;
  BarChart36: any;
  PieChart37: any;
  BarChart37: any;
  PieChart38: any;
  BarChart38: any;
  PieChart39: any;
  BarChart39: any;
  PieChart40: any;
  BarChart40: any;
  PieChart41: any;
  BarChart41: any;
  PieChart42: any;
  BarChart42: any;
  PieChart43: any;
  BarChart43: any;
  PieChart44: any;
  BarChart44: any;
  PieChart45: any;
  BarChart45: any;
  PieChart46: any;
  BarChart46: any;
  PieChart47: any;
  BarChart47: any;
  PieChart48: any;
  BarChart48: any;
  PieChart49: any;
  BarChart49: any;
  PieChart50: any;
  BarChart50: any;
  PieChart51: any;
  BarChart51: any;
  PieChart52: any;
  BarChart52: any;
  PieChart53: any;
  BarChart53: any;
  PieChart54: any;
  BarChart54: any;
  PieChart55: any;
  BarChart55: any;
  PieChart56: any;
  BarChart56: any;

  nbreMale!: number;
  nbrFemale!: number;

  nbreFaite!:number;
  nbreNonFaite!:number;
  nbreMoin1!:number;
  nbreNP!:number;

  nbre1Normale!:number;
  nbre1Diminuee!:number;
  nbre1Moin1!:number;
  nbre1NP!:number;


  nbre2Normale!:number;
  nbre2Dysplasie!:number;
  nbre2Moin1!:number;

  nbre3Oui! :number;
  nbre3Non! :number;
  nbre3NP! :number;
  nbre3moin1! :number;

  nbre4Oui! :number;
  nbre4Non! :number;
  nbre4NP! :number;
  nbre4moin1! :number;


  nbre5Oui! :number;
  nbre5Non! :number;
  nbre5NP! :number;
  nbre5moin1! :number;

  nbre6Oui! :number;
  nbre6Non! :number;
  nbre6NP! :number;
  nbre6moin1! :number;

  nbre7Oui! :number;
  nbre7Non! :number;
  nbre7NP! :number;
  nbre7moin1! :number;

  nbre8Oui! :number;
  nbre8Non! :number;
  nbre8NP! :number;
  nbre8moin1! :number;

  nbre9Oui! :number;
  nbre9Non! :number;
  nbre9NP! :number;
  nbre9moin1! :number;

  nbre10Oui! :number;
  nbre10Non! :number;
  nbre10NP! :number;
  nbre10moin1! :number;

  nbre11Oui! :number;
  nbre11Non! :number;
  nbre11NP! :number;
  nbre11moin1! :number;

  nbre12Oui! :number;
  nbre12Non! :number;
  nbre12NP! :number;
  nbre12moin1! :number;

  nbre13Oui! :number;
  nbre13Non! :number;
  nbre13NP! :number;
  nbre13moin1! :number;

  nbre14Oui! :number;
  nbre14Non! :number;
  nbre14NP! :number;
  nbre14moin1! :number;

  nbre15Oui! :number;
  nbre15Non! :number;
  nbre15NP! :number;
  nbre15moin1! :number;

  nbre16Oui! :number;
  nbre16Non! :number;
  nbre16NP! :number;
  nbre16moin1! :number;
 
  nbre17Faite!:number;
  nbre17NonFaite!:number;
  nbre17Moin1!:number;
  nbre17NP!:number;
  nbre18Oui! :number;
  nbre18Non! :number;
  nbre18NP! :number;
  nbre18moin1! :number;
  nbre19Oui! :number;
  nbre19Non! :number;
  nbre19NP! :number;
  nbre19moin1! :number;
  nbre20Oui! :number;
  nbre20Non! :number;
  nbre20NP! :number;
  nbre20moin1! :number;
  nbre21Oui! :number;
  nbre21Non! :number;
  nbre21NP! :number;
  nbre21moin1! :number;
  nbre22Oui! :number;
  nbre22Non! :number;
  nbre22NP! :number;
  nbre22moin1! :number;
  nbre23Oui! :number;
  nbre23Non! :number;
  nbre23NP! :number;
  nbre23moin1! :number;
  nbre24Oui! :number;
  nbre24Non! :number;
  nbre24NP! :number;
  nbre24moin1! :number;
  nbre25Oui! :number;
  nbre25Non! :number;
  nbre25NP! :number;
  nbre25moin1! :number;
  nbre26Oui! :number;
  nbre26Non! :number;
  nbre26NP! :number;
  nbre26moin1! :number;
  nbre27Oui! :number;
  nbre27Non! :number;
  nbre27NP! :number;
  nbre27moin1! :number;
  nbre28Oui! :number;
  nbre28Non! :number;
  nbre28NP! :number;
  nbre28moin1! :number;
  nbre29Oui! :number;
  nbre29Non! :number;
  nbre29NP! :number;
  nbre29moin1! :number;
  nbre30Oui! :number;
  nbre30Non! :number;
  nbre30NP! :number;
  nbre30moin1! :number;
  nbre31Oui! :number;
  nbre31Non! :number;
  nbre31NP! :number;
  nbre31moin1! :number;
  nbre32Oui! :number;
  nbre32Non! :number;
  nbre32NP! :number;
  nbre32moin1! :number;
  nbre33Oui! :number;
  nbre33Non! :number;
  nbre33NP! :number;
  nbre33moin1! :number;
  nbre34Oui! :number;
  nbre34Non! :number;
  nbre34NP! :number;
  nbre34moin1! :number;
  nbre35Oui! :number;
  nbre35Non! :number;
  nbre35NP! :number;
  nbre35moin1! :number;
  nbre36Oui! :number;
  nbre36Non! :number;
  nbre36NP! :number;
  nbre36moin1! :number;
  nbre37Oui! :number;
  nbre37Non! :number;
  nbre37NP! :number;
  nbre37moin1! :number;
  nbre38Oui! :number;
  nbre38Non! :number;
  nbre38NP! :number;
  nbre38moin1! :number;
  nbre39Oui! :number;
  nbre39Non! :number;
  nbre39NP! :number;
  nbre39moin1! :number;
  nbre40Faite! :number;
  nbre40NonFaite! :number;
  nbre40Moin1! :number;
  nbre40NP! :number;
  nbre41Oui! :number;
  nbre41Non! :number;
  nbre41NP! :number;
  nbre41moin1! :number;
  nbcg42Moin1!:number;
  nbcg42Inf10!:number;
  nbcg42Between10Et20!:number;
  nbcg42Sup20!:number;
  nbre43Oui! :number;
  nbre43Non! :number;
  nbre43NP! :number;
  nbre43moin1! :number;
  nbcp44Moin1!:number;
  nbcp44Inf10!:number;
  nbcp44Between10Et20!:number;
  nbcp44Sup20!:number;
  nbre45Oui! :number;
  nbre45Non! :number;
  nbre45NP! :number;
  nbre45moin1! :number;
  nbre46Oui! :number;
  nbre46Non! :number;
  nbre46NP! :number;
  nbre46moin1! :number;
  nbre47Oui! :number;
  nbre47Non! :number;
  nbre47NP! :number;
  nbre47moin1! :number;
  nbre48Virilisation! :number;
  nbre48Hepatique! :number;
  nbre48Autre! :number;
  nbre48Moin1! :number;
  nbre49Oui! :number;
  nbre49Non! :number;
  nbre49NP! :number;
  nbre49moin1! :number;
  nbre50Oui! :number;
  nbre50Non! :number;
  nbre50NP! :number;
  nbre50moin1! :number;
  nbre51Oui! :number;
  nbre51Non! :number;
  nbre51NP! :number;
  nbre51moin1! :number;
  nbre52Oui! :number;
  nbre52Non! :number;
  nbre52NP! :number;
  nbre52moin1! :number;
  nbre53Oui! :number;
  nbre53Non! :number;
  nbre53NP! :number;
  nbre53moin1! :number;
  nbre54Faite! :number;
  nbre54NonFaite! :number;
  nbre54Moin1! :number;
  nbre54NP! :number;
  nbre55Oui! :number;
  nbre55Non! :number;
  nbre55NP! :number;
  nbre55moin1! :number;




  bool = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = false ;
  bool6 = false ;
  bool7 = false ;
  bool8 = false ;
  bool9 = false ;
  bool10 = false ;
  bool11 = false ;
  bool12 = false ;
  bool13 = false ;
  bool14 = false ;
  bool15 = false ;
  bool16 = false ;
  bool17 = false ;
  bool18 = false ;
  bool19 = false ;
  bool20 = false ;
  bool21 = false ;
  bool22 = false ;
  bool23 = false ;
  bool24 = false ;
  bool25 = false ;
  bool26 = false ;
  bool27 = false ;
  bool28 = false ;
  bool29 = false ;
  bool30 = false ;
  bool31 = false ;
  bool32 = false ;
  bool33 = false ;
  bool34 = false ;
  bool35 = false ;
  bool36 = false ;
  bool37 = false ;
  bool38 = false ;
  bool39 = false ;
  bool40 = false ;
  bool41 = false ;
  bool42 = false ;
  bool43 = false ;
  bool44 = false ;
  bool45 = false ;
  bool46 = false ;
  bool47 = false ;
  bool48 = false ;
  bool49 = false ;
  bool50 = false ;
  bool51 = false ;
  bool52 = false ;
  bool53 = false ;
  bool54 = false ;
  bool55 = false ;
  bool56 = false ;
  bool57 = false ;




  constructor(private ficheService: FicheService) {




  }
  ngDoCheck(): void {

    if ((this.bool == true)  && (this.varp1=='sexe')){


      setTimeout(()=>{
        this.fcnChart();

    }, 20);

      this.bool = false;

      console.log("dddd");

    }

    if ((this.bool2 == true) && (this.varf1=='uiv')) {


      setTimeout(()=>{
        this.fcnChartf1();

    }, 20);

      //this.fcnChartf1();
      this.bool2 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool3 == true) && (this.varf1=='cellularite')) {


      setTimeout(()=>{
        this.fcnChartf2();

    }, 20);

      //this.fcnChartf1();
      this.bool3 = false;

      console.log('cccccccccccc');


    }


    if ((this.bool4 == true) && (this.varf1=='morphologie')) {


      setTimeout(()=>{
        this.fcnChartf3();

    }, 20);

      //this.fcnChartf1();
      this.bool4 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool5 == true) && (this.varf1=='syndromeanemique')) {


      setTimeout(()=>{
        this.fcnChartf4();

    }, 20);

      //this.fcnChartf1();
      this.bool5 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool6 == true) && (this.varf1=='syndromehemorragique')) {


      setTimeout(()=>{
        this.fcnChartf5();

    }, 20);

      //this.fcnChartf1();
      this.bool6 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool7 == true) && (this.varf1=='syndromeinf')) {


      setTimeout(()=>{
        this.fcnChartf6();

    }, 20);

      //this.fcnChartf1();
      this.bool7 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool8 == true) && (this.varf1=='cancer')) {


      setTimeout(()=>{
        this.fcnChartf7();

    }, 20);

      //this.fcnChartf1();
      this.bool8 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool9 == true) && (this.varf1=='hypotrophie')) {


      setTimeout(()=>{
        this.fcnChartf8();

    }, 20);

      //this.fcnChartf1();
      this.bool9 = false;

      console.log('cccccccccccc');


    }


    if ((this.bool10 == true) && (this.varf1=='troublecroissance')) {


      setTimeout(()=>{
        this.fcnChartf9();

    }, 20);

      //this.fcnChartf1();
      this.bool10 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool11 == true) && (this.varf1=='atteintecut')) {


      setTimeout(()=>{
        this.fcnChartf10();

    }, 20);

      //this.fcnChartf1();
      this.bool11 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool12 == true) && (this.varf1=='hyperpigmentation')) {


      setTimeout(()=>{
        this.fcnChartf11();

    }, 20);

      //this.fcnChartf1();
      this.bool12 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool13 == true) && (this.varf1=='atteintetete')) {


      setTimeout(()=>{
        this.fcnChartf12();

    }, 20);

      //this.fcnChartf1();
      this.bool13 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool14 == true) && (this.varf1=='atteinteoss')) {


      setTimeout(()=>{
        this.fcnChartf13();

    }, 20);

      //this.fcnChartf1();
      this.bool14 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool15 == true) && (this.varf1=='anomaliedigestive')) {


      setTimeout(()=>{
        this.fcnChartf14();

    }, 20);

      //this.fcnChartf1();
      this.bool15 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool16 == true) && (this.varf1=='malformationuro')) {


      setTimeout(()=>{
        this.fcnChartf15();

    }, 20);

      //this.fcnChartf1();
      this.bool16 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool17 == true) && (this.varf1=='microcephalie')) {


      setTimeout(()=>{
        this.fcnChartf16();

    }, 20);

      //this.fcnChartf1();
      this.bool17 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool18 == true) && (this.varf1=='microphtalmie')) {


      setTimeout(()=>{
        this.fcnChartf17();

    }, 20);

      //this.fcnChartf1();
      this.bool18 = false;

      console.log('cccccccccccc');


    }

    if ((this.bool19 == true) && (this.varf1=='echo')) {


      setTimeout(()=>{
        this.fcnChartf18();

    }, 20);

      //this.fcnChartf1();
      this.bool19 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool20 == true) && (this.varf1=='decouvertefortuite')) {


      setTimeout(()=>{
        this.fcnChartf19();

    }, 20);

      //this.fcnChartf1();
      this.bool20 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool21 == true) && (this.varf1=='enquetefamiliale')) {


      setTimeout(()=>{
        this.fcnChartf20();

    }, 20);

      //this.fcnChartf1();
      this.bool21 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool22 == true) && (this.varf1=='tachecafe')) {


      setTimeout(()=>{
        this.fcnChartf21();

    }, 20);

      //this.fcnChartf1();
      this.bool22 = false;

      console.log('cccccccccccc');


    }
    if ((this.bool23 == true) && (this.varf1=='facietriang')) {


      setTimeout(()=>{
        this.fcnChartf22();

    }, 20);

      //this.fcnChartf1();
      this.bool23 = false;

    }
    if ((this.bool24 == true) && (this.varf1=='traitsfins')) {


      setTimeout(()=>{
        this.fcnChartf23();

    }, 20);

      //this.fcnChartf1();
      this.bool24 = false;

    }
    if ((this.bool25 == true) && (this.varf1=='reinfercheval')) {


      setTimeout(()=>{
        this.fcnChartf24();

    }, 20);

      //this.fcnChartf1();
      this.bool25 = false;

    }
    if ((this.bool26 == true) && (this.varf1=='reinunique')) {


      setTimeout(()=>{
        this.fcnChartf25();

    }, 20);

      //this.fcnChartf1();
      this.bool26 = false;

    }
    if ((this.bool27 == true) && (this.varf1=='reinectopique')) {


      setTimeout(()=>{
        this.fcnChartf26();

    }, 20);

      //this.fcnChartf1();
      this.bool27 = false;

    }
    if ((this.bool28 == true) && (this.varf1=='retardpubertaire')) {


      setTimeout(()=>{
        this.fcnChartf27();

    }, 20);

      //this.fcnChartf1();
      this.bool28 = false;

    }
    if ((this.bool29 == true) && (this.varf1=='anomaliepouce')) {


      setTimeout(()=>{
        this.fcnChartf28();

    }, 20);

      //this.fcnChartf1();
      this.bool29 = false;

    }
    if ((this.bool30 == true) && (this.varf1=='anomalieautredoigts')) {


      setTimeout(()=>{
        this.fcnChartf29();

    }, 20);

      //this.fcnChartf1();
      this.bool30 = false;

    }

    if ((this.bool31 == true) && (this.varf1=='agenesieradius')) {


      setTimeout(()=>{
        this.fcnChartf30();

    }, 20);

      //this.fcnChartf1();
      this.bool31 = false;

    }
    if ((this.bool32 == true) && (this.varf1=='anomalieorteil')) {


      setTimeout(()=>{
        this.fcnChartf31();

    }, 20);

      //this.fcnChartf1();
      this.bool32 = false;

    }
    if ((this.bool33 == true) && (this.varf1=='spinabifida')) {


      setTimeout(()=>{
        this.fcnChartf32();

    }, 20);

      //this.fcnChartf1();
      this.bool33 = false;

    }
    if ((this.bool34 == true) && (this.varf1=='luxationconghanche')) {


      setTimeout(()=>{
        this.fcnChartf33();

    }, 20);

      //this.fcnChartf1();
      this.bool34 = false;

    }
    if ((this.bool35 == true) && (this.varf1=='anomalieneuro')) {


      setTimeout(()=>{
        this.fcnChartf34();

    }, 20);

      //this.fcnChartf1();
      this.bool35 = false;

    }
    if ((this.bool36 == true) && (this.varf1=='retardmental')) {


      setTimeout(()=>{
        this.fcnChartf35();

    }, 20);

      //this.fcnChartf1();
      this.bool36 = false;

    }
    if ((this.bool37 == true) && (this.varf1=='hypoacousie')) {


      setTimeout(()=>{
        this.fcnChartf36();

    }, 20);

      //this.fcnChartf1();
      this.bool37 = false;

    }
    if ((this.bool38 == true) && (this.varf1=='strabisme')) {


      setTimeout(()=>{
        this.fcnChartf37();

    }, 20);

      //this.fcnChartf1();
      this.bool38 = false;

    }
    if ((this.bool39 == true) && (this.varf1=='anomaliecardiovas')) {


      setTimeout(()=>{
        this.fcnChartf38();

    }, 20);

      //this.fcnChartf1();
      this.bool39 = false;

    }
    if ((this.bool40 == true) && (this.varf1=='echocoeur')) {


      setTimeout(()=>{
        this.fcnChartf39();

    }, 20);

      //this.fcnChartf1();
      this.bool40 = false;

    }
    if ((this.bool41 == true) && (this.varf1=='endocrinopathie')) {


      setTimeout(()=>{
        this.fcnChartf40();

    }, 20);

      //this.fcnChartf1();
      this.bool41 = false;

    }
    if ((this.bool42 == true) && (this.varf1=='congelationcellule')) {


      setTimeout(()=>{
        this.fcnChartf41();

    }, 20);

      //this.fcnChartf1();
      this.bool42 = false;

    }
    if ((this.bool43 == true) && (this.varf1=='transfusion')) {


      setTimeout(()=>{
        this.fcnChartf42();

    }, 20);

      //this.fcnChartf1();
      this.bool43 = false;

    }
    if ((this.bool44 == true) && (this.varf1=='nbcg')) {


      setTimeout(()=>{
        this.fcnChartf43();

    }, 20);

      //this.fcnChartf1();
      this.bool44 = false;

    }
    if ((this.bool45 == true) && (this.varf1=='chelationFer')) {


      setTimeout(()=>{
        this.fcnChartf44();

    }, 20);

      //this.fcnChartf1();
      this.bool45 = false;

    }
    if ((this.bool46 == true) && (this.varf1=='nbcp')) {


      setTimeout(()=>{
        this.fcnChartf45();

    }, 20);

      //this.fcnChartf1();
      this.bool46 = false;

    }
    if ((this.bool47 == true) && (this.varf1=='nilevar')) {


      setTimeout(()=>{
        this.fcnChartf46();

    }, 20);

      //this.fcnChartf1();
      this.bool47 = false;

    }
    if ((this.bool48 == true) && (this.varf1=='oxymetholone')) {


      setTimeout(()=>{
        this.fcnChartf47();

    }, 20);

      //this.fcnChartf1();
      this.bool48 = false;

    }
    if ((this.bool49 == true) && (this.varf1=='androtordyl')) {


      setTimeout(()=>{
        this.fcnChartf48();

    }, 20);

      //this.fcnChartf1();
      this.bool49 = false;

    }
    if ((this.bool50 == true) && (this.varf1=='toxicite')) {


      setTimeout(()=>{
        this.fcnChartf49();

    }, 20);

      //this.fcnChartf1();
      this.bool50 = false;

    }
    if ((this.bool51 == true) && (this.varf1=='enqueteHLA')) {


      setTimeout(()=>{
        this.fcnChartf50();

    }, 20);

      //this.fcnChartf1();
      this.bool51 = false;

    }
    if ((this.bool52 == true) && (this.varf1=='cyclophosphamide')) {


      setTimeout(()=>{
        this.fcnChartf51();

    }, 20);

      //this.fcnChartf1();
      this.bool52 = false;

    }
    if ((this.bool53 == true) && (this.varf1=='greffefaite')) {


      setTimeout(()=>{
        this.fcnChartf52();

    }, 20);

      //this.fcnChartf1();
      this.bool53 = false;

    }
    if ((this.bool54 == true) && (this.varf1=='fludarabine')) {


      setTimeout(()=>{
        this.fcnChartf53();

    }, 20);

      //this.fcnChartf1();
      this.bool54 = false;

    }
    if ((this.bool55 == true) && (this.varf1=='busulfan')) {


      setTimeout(()=>{
        this.fcnChartf54();

    }, 20);

      //this.fcnChartf1();
      this.bool55 = false;

    }
    if ((this.bool56 == true) && (this.varf1=='serotherapie')) {


      setTimeout(()=>{
        this.fcnChartf55();

    }, 20);

      //this.fcnChartf1();
      this.bool56 = false;

    }
    if ((this.bool57 == true) && (this.varf1=='smd')) {


      setTimeout(()=>{
        this.fcnChartf56();

    }, 20);

      //this.fcnChartf1();
      this.bool57 = false;

    }









  }




  ngOnInit(): void {


    this.ficheService.getMF_Patient().subscribe(data => {
      this.nbreMale = data.Male;
      this.nbrFemale = data.Female;
      console.log('gggfxwxs', this.nbreMale, this.nbrFemale);
      if ((this.nbreMale != undefined) && (this.nbrFemale != undefined)) {
        this.bool = true;
      }

    });

    this.ficheService.getnbre_UIV().subscribe(data=>{
      this.nbreFaite=data.Faite;
      this.nbreNonFaite=data.Nonfaite;
      this.nbreMoin1=data.Moin1;
      this.nbreNP=data.np;

      if ((this.nbreFaite != undefined) && (this.nbreNonFaite != undefined) && (this.nbreMoin1 != undefined) && (this.nbreNP != undefined)) {
        this.bool2 = true;
      }
    })

    this.ficheService.getnbre_cellu().subscribe(data=>{
      this.nbre1Normale=data.Normale;
      this.nbre1Diminuee=data.Diminuee;
      this.nbre1Moin1=data.Moin1;
      this.nbre1NP=data.np;

      if ((this.nbre1Normale != undefined) && (this.nbre1Diminuee != undefined) && (this.nbre1Moin1 != undefined) && (this.nbre1NP != undefined)) {
        this.bool3 = true;
      }
    })

    this.ficheService.getnbre_morphologie().subscribe(data=>{
      this.nbre2Normale=data.Normale;
      this.nbre2Dysplasie=data.Dysplasie;
      this.nbre2Moin1=data.Moin1;

      if ((this.nbre2Normale != undefined) && (this.nbre2Dysplasie != undefined) && (this.nbre2Moin1 != undefined)) {
        this.bool4 = true;
      }
    })

    this.ficheService.getnbre_syndromeanemique().subscribe(data=>{
      this.nbre3Oui=data.Oui;
      this.nbre3Non=data.Non;
      this.nbre3NP=data.NP;
      this.nbre3moin1=data.moin1;

      if ((this.nbre3Oui != undefined) && (this.nbre3Non != undefined) && (this.nbre3NP != undefined) && (this.nbre3moin1 != undefined)) {
        this.bool5 = true;
      }
    })

    this.ficheService.getnbre_syndromehem().subscribe(data=>{
      this.nbre4Oui=data.Oui;
      this.nbre4Non=data.Non;
      this.nbre4NP=data.NP;
      this.nbre4moin1=data.moin1;

      if ((this.nbre4Oui != undefined) && (this.nbre4Non != undefined) && (this.nbre4NP != undefined) && (this.nbre4moin1 != undefined)) {
        this.bool6 = true;
      }
    })

    this.ficheService.getnbre_syndromeinf().subscribe(data=>{
      this.nbre5Oui=data.Oui;
      this.nbre5Non=data.Non;
      this.nbre5NP=data.NP;
      this.nbre5moin1=data.moin1;

      if ((this.nbre5Oui != undefined) && (this.nbre5Non != undefined) && (this.nbre5NP != undefined) && (this.nbre5moin1 != undefined)) {
        this.bool7 = true;
      }
    })

    this.ficheService.getnbre_cancer().subscribe(data=>{
      this.nbre6Oui=data.Oui;
      this.nbre6Non=data.Non;
      this.nbre6NP=data.NP;
      this.nbre6moin1=data.moin1;

      if ((this.nbre6Oui != undefined) && (this.nbre6Non != undefined) && (this.nbre6NP != undefined) && (this.nbre6moin1 != undefined)) {
        this.bool8 = true;
      }
    })

    this.ficheService.getnbre_hypotrophie().subscribe(data=>{
      this.nbre7Oui=data.Oui;
      this.nbre7Non=data.Non;
      this.nbre7NP=data.NP;
      this.nbre7moin1=data.moin1;

      if ((this.nbre7Oui != undefined) && (this.nbre7Non != undefined) && (this.nbre7NP != undefined) && (this.nbre7moin1 != undefined)) {
        this.bool9 = true;
      }
    })

    this.ficheService.getnbre_troublecroi().subscribe(data=>{
      this.nbre8Oui=data.Oui;
      this.nbre8Non=data.Non;
      this.nbre8NP=data.NP;
      this.nbre8moin1=data.moin1;

      if ((this.nbre8Oui != undefined) && (this.nbre8Non != undefined) && (this.nbre8NP != undefined) && (this.nbre8moin1 != undefined)) {
        this.bool10 = true;
      }
    })


    this.ficheService.getnbre_atteintecut().subscribe(data=>{
      this.nbre9Oui=data.Oui;
      this.nbre9Non=data.Non;
      this.nbre9NP=data.NP;
      this.nbre9moin1=data.moin1;

      if ((this.nbre9Oui != undefined) && (this.nbre9Non != undefined) && (this.nbre9NP != undefined) && (this.nbre9moin1 != undefined)) {
        this.bool11 = true;
      }
    })

    this.ficheService.getnbre_hyperpigmentation().subscribe(data=>{
      this.nbre10Oui=data.Oui;
      this.nbre10Non=data.Non;
      this.nbre10NP=data.NP;
      this.nbre10moin1=data.moin1;

      if ((this.nbre10Oui != undefined) && (this.nbre10Non != undefined) && (this.nbre10NP != undefined) && (this.nbre10moin1 != undefined)) {
        this.bool12 = true;
      }
    })

    this.ficheService.getnbre_atteintetete().subscribe(data=>{
      this.nbre11Oui=data.Oui;
      this.nbre11Non=data.Non;
      this.nbre11NP=data.NP;
      this.nbre11moin1=data.moin1;

      if ((this.nbre11Oui != undefined) && (this.nbre11Non != undefined) && (this.nbre11NP != undefined) && (this.nbre11moin1 != undefined)) {
        this.bool13 = true;
      }
    })

    this.ficheService.getnbre_atteinteoss().subscribe(data=>{
      this.nbre12Oui=data.Oui;
      this.nbre12Non=data.Non;
      this.nbre12NP=data.NP;
      this.nbre12moin1=data.moin1;

      if ((this.nbre12Oui != undefined) && (this.nbre12Non != undefined) && (this.nbre12NP != undefined) && (this.nbre12moin1 != undefined)) {
        this.bool14 = true;
      }
    })

    this.ficheService.getnbre_anomaliedig().subscribe(data=>{
      this.nbre13Oui=data.Oui;
      this.nbre13Non=data.Non;
      this.nbre13NP=data.NP;
      this.nbre13moin1=data.moin1;

      if ((this.nbre13Oui != undefined) && (this.nbre13Non != undefined) && (this.nbre13NP != undefined) && (this.nbre13moin1 != undefined)) {
        this.bool15 = true;
      }
    })

    this.ficheService.getnbre_malformationuro().subscribe(data=>{
      this.nbre14Oui=data.Oui;
      this.nbre14Non=data.Non;
      this.nbre14NP=data.NP;
      this.nbre14moin1=data.moin1;

      if ((this.nbre14Oui != undefined) && (this.nbre14Non != undefined) && (this.nbre14NP != undefined) && (this.nbre14moin1 != undefined)) {
        this.bool16 = true;
      }
    })

    this.ficheService.getnbre_microcephalie().subscribe(data=>{
      this.nbre15Oui=data.Oui;
      this.nbre15Non=data.Non;
      this.nbre15NP=data.NP;
      this.nbre15moin1=data.moin1;

      if ((this.nbre15Oui != undefined) && (this.nbre15Non != undefined) && (this.nbre15NP != undefined) && (this.nbre15moin1 != undefined)) {
        this.bool17 = true;
      }
    })

    this.ficheService.getnbre_microphtalmie().subscribe(data=>{
      this.nbre16Oui=data.Oui;
      this.nbre16Non=data.Non;
      this.nbre16NP=data.NP;
      this.nbre16moin1=data.moin1;

      if ((this.nbre16Oui != undefined) && (this.nbre16Non != undefined) && (this.nbre16NP != undefined) && (this.nbre16moin1 != undefined)) {
        this.bool18 = true;
      }
    })

    this.ficheService.getnbre_echo().subscribe(data=>{
      this.nbre17Faite=data.Faite;
      this.nbre17NonFaite=data.Nonfaite;
      this.nbre17Moin1=data.Moin1;
      this.nbre17NP=data.NP;

      if ((this.nbre17Faite != undefined) && (this.nbre17NonFaite != undefined) && (this.nbre17Moin1 != undefined) && (this.nbre17NP != undefined)) {
        this.bool19 = true;
      }
    })

    this.ficheService.getnbre_decouvertefortuite().subscribe(data=>{
      this.nbre18Oui=data.Oui;
      this.nbre18Non=data.Non;
      this.nbre18NP=data.NP;
      this.nbre18moin1=data.moin1;

      if ((this.nbre18Oui != undefined) && (this.nbre18Non != undefined) && (this.nbre18NP != undefined) && (this.nbre18moin1 != undefined)) {
        this.bool20 = true;
      }
    })
    this.ficheService.getnbre_enquetefam().subscribe(data=>{
      this.nbre19Oui=data.Oui;
      this.nbre19Non=data.Non;
      this.nbre19NP=data.NP;
      this.nbre19moin1=data.moin1;

      if ((this.nbre19Oui != undefined) && (this.nbre19Non != undefined) && (this.nbre19NP != undefined) && (this.nbre19moin1 != undefined)) {
        this.bool21 = true;
      }
    })
    this.ficheService.getnbre_tachecafe().subscribe(data=>{
      this.nbre20Oui=data.Oui;
      this.nbre20Non=data.Non;
      this.nbre20NP=data.NP;
      this.nbre20moin1=data.moin1;

      if ((this.nbre20Oui != undefined) && (this.nbre20Non != undefined) && (this.nbre20NP != undefined) && (this.nbre20moin1 != undefined)) {
        this.bool22 = true;
      }
    })
    this.ficheService.getnbre_facietriang().subscribe(data=>{
      this.nbre21Oui=data.Oui;
      this.nbre21Non=data.Non;
      this.nbre21NP=data.NP;
      this.nbre21moin1=data.moin1;

      if ((this.nbre21Oui != undefined) && (this.nbre21Non != undefined) && (this.nbre21NP != undefined) && (this.nbre21moin1 != undefined)) {
        this.bool23 = true;
      }
    })
    this.ficheService.getnbre_traitsfins().subscribe(data=>{
      this.nbre22Oui=data.Oui;
      this.nbre22Non=data.Non;
      this.nbre22NP=data.NP;
      this.nbre22moin1=data.moin1;

      if ((this.nbre22Oui != undefined) && (this.nbre22Non != undefined) && (this.nbre22NP != undefined) && (this.nbre22moin1 != undefined)) {
        this.bool24 = true;
      }
    })
    this.ficheService.getnbre_reinfercheval().subscribe(data=>{
      this.nbre23Oui=data.Oui;
      this.nbre23Non=data.Non;
      this.nbre23NP=data.NP;
      this.nbre23moin1=data.moin1;

      if ((this.nbre23Oui != undefined) && (this.nbre23Non != undefined) && (this.nbre23NP != undefined) && (this.nbre23moin1 != undefined)) {
        this.bool25 = true;
      }
    })
    this.ficheService.getnbre_reinunique().subscribe(data=>{
      this.nbre24Oui=data.Oui;
      this.nbre24Non=data.Non;
      this.nbre24NP=data.NP;
      this.nbre24moin1=data.moin1;

      if ((this.nbre24Oui != undefined) && (this.nbre24Non != undefined) && (this.nbre24NP != undefined) && (this.nbre24moin1 != undefined)) {
        this.bool26 = true;
      }
    })
    this.ficheService.getnbre_reinectopique().subscribe(data=>{
      this.nbre25Oui=data.Oui;
      this.nbre25Non=data.Non;
      this.nbre25NP=data.NP;
      this.nbre25moin1=data.moin1;

      if ((this.nbre25Oui != undefined) && (this.nbre25Non != undefined) && (this.nbre25NP != undefined) && (this.nbre25moin1 != undefined)) {
        this.bool27 = true;
      }
    })
    this.ficheService.getnbre_retardpubertaire().subscribe(data=>{
      this.nbre26Oui=data.Oui;
      this.nbre26Non=data.Non;
      this.nbre26NP=data.NP;
      this.nbre26moin1=data.moin1;

      if ((this.nbre26Oui != undefined) && (this.nbre26Non != undefined) && (this.nbre26NP != undefined) && (this.nbre26moin1 != undefined)) {
        this.bool28 = true;
      }
    })
    this.ficheService.getnbre_anomaliepouce().subscribe(data=>{
      this.nbre27Oui=data.Oui;
      this.nbre27Non=data.Non;
      this.nbre27NP=data.NP;
      this.nbre27moin1=data.moin1;

      if ((this.nbre27Oui != undefined) && (this.nbre27Non != undefined) && (this.nbre27NP != undefined) && (this.nbre27moin1 != undefined)) {
        this.bool29 = true;
      }
    })
    this.ficheService.getnbre_anomalieautredoigts().subscribe(data=>{
      this.nbre28Oui=data.Oui;
      this.nbre28Non=data.Non;
      this.nbre28NP=data.NP;
      this.nbre28moin1=data.moin1;

      if ((this.nbre28Oui != undefined) && (this.nbre28Non != undefined) && (this.nbre28NP != undefined) && (this.nbre28moin1 != undefined)) {
        this.bool30 = true;
      }
    })
    this.ficheService.getnbre_agenesieradius().subscribe(data=>{
      this.nbre29Oui=data.Oui;
      this.nbre29Non=data.Non;
      this.nbre29NP=data.NP;
      this.nbre29moin1=data.moin1;

      if ((this.nbre29Oui != undefined) && (this.nbre29Non != undefined) && (this.nbre29NP != undefined) && (this.nbre29moin1 != undefined)) {
        this.bool31 = true;
      }
    })
    this.ficheService.getnbre_anomalieorteil().subscribe(data=>{
      this.nbre30Oui=data.Oui;
      this.nbre30Non=data.Non;
      this.nbre30NP=data.NP;
      this.nbre30moin1=data.moin1;

      if ((this.nbre30Oui != undefined) && (this.nbre30Non != undefined) && (this.nbre30NP != undefined) && (this.nbre30moin1 != undefined)) {
        this.bool32 = true;
      }
    })
    this.ficheService.getnbre_spinabifida().subscribe(data=>{
      this.nbre31Oui=data.Oui;
      this.nbre31Non=data.Non;
      this.nbre31NP=data.NP;
      this.nbre31moin1=data.moin1;

      if ((this.nbre31Oui != undefined) && (this.nbre31Non != undefined) && (this.nbre31NP != undefined) && (this.nbre31moin1 != undefined)) {
        this.bool33 = true;
      }
    })
    this.ficheService.getnbre_luxconghanche().subscribe(data=>{
      this.nbre32Oui=data.Oui;
      this.nbre32Non=data.Non;
      this.nbre32NP=data.NP;
      this.nbre32moin1=data.moin1;

      if ((this.nbre32Oui != undefined) && (this.nbre32Non != undefined) && (this.nbre32NP != undefined) && (this.nbre32moin1 != undefined)) {
        this.bool34 = true;
      }
    })
    this.ficheService.getnbre_anomalieneuro().subscribe(data=>{
      this.nbre33Oui=data.Oui;
      this.nbre33Non=data.Non;
      this.nbre33NP=data.NP;
      this.nbre33moin1=data.moin1;

      if ((this.nbre33Oui != undefined) && (this.nbre33Non != undefined) && (this.nbre33NP != undefined) && (this.nbre33moin1 != undefined)) {
        this.bool35 = true;
      }
    })
    this.ficheService.getnbre_retardmental().subscribe(data=>{
      this.nbre34Oui=data.Oui;
      this.nbre34Non=data.Non;
      this.nbre34NP=data.NP;
      this.nbre34moin1=data.moin1;

      if ((this.nbre34Oui != undefined) && (this.nbre34Non != undefined) && (this.nbre34NP != undefined) && (this.nbre34moin1 != undefined)) {
        this.bool36 = true;
      }
    })
    this.ficheService.getnbre_hypoacousie().subscribe(data=>{
      this.nbre35Oui=data.Oui;
      this.nbre35Non=data.Non;
      this.nbre35NP=data.NP;
      this.nbre35moin1=data.moin1;

      if ((this.nbre35Oui != undefined) && (this.nbre35Non != undefined) && (this.nbre35NP != undefined) && (this.nbre35moin1 != undefined)) {
        this.bool37 = true;
      }
    })
    this.ficheService.getnbre_strabisme().subscribe(data=>{
      this.nbre36Oui=data.Oui;
      this.nbre36Non=data.Non;
      this.nbre36NP=data.NP;
      this.nbre36moin1=data.moin1;

      if ((this.nbre36Oui != undefined) && (this.nbre36Non != undefined) && (this.nbre36NP != undefined) && (this.nbre36moin1 != undefined)) {
        this.bool38 = true;
      }
    })
    this.ficheService.getnbre_anomaliecardiovas().subscribe(data=>{
      this.nbre37Oui=data.Oui;
      this.nbre37Non=data.Non;
      this.nbre37NP=data.NP;
      this.nbre37moin1=data.moin1;

      if ((this.nbre37Oui != undefined) && (this.nbre37Non != undefined) && (this.nbre37NP != undefined) && (this.nbre37moin1 != undefined)) {
        this.bool39 = true;
      }
    })
    this.ficheService.getnbre_echocoeur().subscribe(data=>{
      this.nbre38Oui=data.Oui;
      this.nbre38Non=data.Non;
      this.nbre38NP=data.NP;
      this.nbre38moin1=data.moin1;

      if ((this.nbre38Oui != undefined) && (this.nbre38Non != undefined) && (this.nbre38NP != undefined) && (this.nbre38moin1 != undefined)) {
        this.bool40 = true;
      }
    })
    this.ficheService.getnbre_endocrinopathie().subscribe(data=>{
      this.nbre39Oui=data.Oui;
      this.nbre39Non=data.Non;
      this.nbre39NP=data.NP;
      this.nbre39moin1=data.moin1;

      if ((this.nbre39Oui != undefined) && (this.nbre39Non != undefined) && (this.nbre39NP != undefined) && (this.nbre39moin1 != undefined)) {
        this.bool41 = true;
      }
    })
    this.ficheService.getnbre_congelationcellule().subscribe(data=>{
      this.nbre40Faite=data.Faite;
      this.nbre40NonFaite=data.Nonfaite;
      this.nbre40Moin1=data.Moin1;
      this.nbre40NP=data.NP;

      if ((this.nbre40Faite != undefined) && (this.nbre40NonFaite != undefined) && (this.nbre40Moin1 != undefined) && (this.nbre40NP != undefined)) {
        this.bool42 = true;
      }
    })
    this.ficheService.getnbre_transfusion().subscribe(data=>{
      this.nbre41Oui=data.Oui;
      this.nbre41Non=data.Non;
      this.nbre41NP=data.NP;
      this.nbre41moin1=data.moin1;

      if ((this.nbre41Oui != undefined) && (this.nbre41Non != undefined) && (this.nbre41NP != undefined) && (this.nbre41moin1 != undefined)) {
        this.bool43 = true;
      }
    })
    this.ficheService.getnbre_cg().subscribe(data=>{
      this.nbcg42Moin1=data.Moin1;
      this.nbcg42Inf10=data.Inf10;
      this.nbcg42Between10Et20=data.Between10Et20;
      this.nbcg42Sup20=data.Sup20;

      if ((this.nbcg42Moin1 != undefined) && (this.nbcg42Inf10 != undefined) && (this.nbcg42Between10Et20 != undefined) && (this.nbcg42Sup20 != undefined)) {
        this.bool44 = true;
      }
    })
    this.ficheService.getnbre_chelationFer().subscribe(data=>{
      this.nbre43Oui=data.Oui;
      this.nbre43Non=data.Non;
      this.nbre43NP=data.NP;
      this.nbre43moin1=data.moin1;

      if ((this.nbre43Oui != undefined) && (this.nbre43Non != undefined) && (this.nbre43NP != undefined) && (this.nbre43moin1 != undefined)) {
        this.bool45 = true;
      }
    })
    this.ficheService.getnbre_cp().subscribe(data=>{
      this.nbcp44Moin1=data.Moin1;
      this.nbcp44Inf10=data.Inf10;
      this.nbcp44Between10Et20=data.Between10Et20;
      this.nbcp44Sup20=data.Sup20;

      if ((this.nbcp44Moin1 != undefined) && (this.nbcp44Inf10 != undefined) && (this.nbcp44Between10Et20 != undefined) && (this.nbcp44Sup20 != undefined)) {
        this.bool46 = true;
      }
    })
    this.ficheService.getnbre_nilevar().subscribe(data=>{
      this.nbre45Oui=data.Oui;
      this.nbre45Non=data.Non;
      this.nbre45NP=data.NP;
      this.nbre45moin1=data.moin1;

      if ((this.nbre45Oui != undefined) && (this.nbre45Non != undefined) && (this.nbre45NP != undefined) && (this.nbre45moin1 != undefined)) {
        this.bool47 = true;
      }
    })
    this.ficheService.getnbre_oxymetholone().subscribe(data=>{
      this.nbre46Oui=data.Oui;
      this.nbre46Non=data.Non;
      this.nbre46NP=data.NP;
      this.nbre46moin1=data.moin1;

      if ((this.nbre46Oui != undefined) && (this.nbre46Non != undefined) && (this.nbre46NP != undefined) && (this.nbre46moin1 != undefined)) {
        this.bool48 = true;
      }
    })
    this.ficheService.getnbre_androtordyl().subscribe(data=>{
      this.nbre47Oui=data.Oui;
      this.nbre47Non=data.Non;
      this.nbre47NP=data.NP;
      this.nbre47moin1=data.moin1;

      if ((this.nbre47Oui != undefined) && (this.nbre47Non != undefined) && (this.nbre47NP != undefined) && (this.nbre47moin1 != undefined)) {
        this.bool49 = true;
      }
    })
    this.ficheService.getnbre_toxicite().subscribe(data=>{
      this.nbre48Virilisation=data.Virilisation;
      this.nbre48Hepatique=data.Hepatique;
      this.nbre48Autre=data.Autre;
      this.nbre48Moin1=data.Moin1;

      if ((this.nbre48Virilisation != undefined) && (this.nbre48Hepatique != undefined) && (this.nbre48Autre != undefined) && (this.nbre48Moin1 != undefined)) {
        this.bool50 = true;
      }
    })
    this.ficheService.getnbre_enqueteHLA().subscribe(data=>{
      this.nbre49Oui=data.Oui;
      this.nbre49Non=data.Non;
      this.nbre49NP=data.NP;
      this.nbre49moin1=data.moin1;

      if ((this.nbre49Oui != undefined) && (this.nbre49Non != undefined) && (this.nbre49NP != undefined) && (this.nbre49moin1 != undefined)) {
        this.bool51 = true;
      }
    })
    this.ficheService.getnbre_cyclophosphamide().subscribe(data=>{
      this.nbre50Oui=data.Oui;
      this.nbre50Non=data.Non;
      this.nbre50NP=data.NP;
      this.nbre50moin1=data.moin1;

      if ((this.nbre50Oui != undefined) && (this.nbre50Non != undefined) && (this.nbre50NP != undefined) && (this.nbre50moin1 != undefined)) {
        this.bool52 = true;
      }
    })
    this.ficheService.getnbre_greffefaite().subscribe(data=>{
      this.nbre51Oui=data.Oui;
      this.nbre51Non=data.Non;
      this.nbre51NP=data.NP;
      this.nbre51moin1=data.moin1;

      if ((this.nbre51Oui != undefined) && (this.nbre51Non != undefined) && (this.nbre51NP != undefined) && (this.nbre51moin1 != undefined)) {
        this.bool53 = true;
      }
    })
    this.ficheService.getnbre_fludarabine().subscribe(data=>{
      this.nbre52Oui=data.Oui;
      this.nbre52Non=data.Non;
      this.nbre52NP=data.NP;
      this.nbre52moin1=data.moin1;

      if ((this.nbre52Oui != undefined) && (this.nbre52Non != undefined) && (this.nbre52NP != undefined) && (this.nbre52moin1 != undefined)) {
        this.bool54 = true;
      }
    })
    this.ficheService.getnbre_busulfan().subscribe(data=>{
      this.nbre53Oui=data.Oui;
      this.nbre53Non=data.Non;
      this.nbre53NP=data.NP;
      this.nbre53moin1=data.moin1;

      if ((this.nbre53Oui != undefined) && (this.nbre53Non != undefined) && (this.nbre53NP != undefined) && (this.nbre53moin1 != undefined)) {
        this.bool55 = true;
      }
    })
    this.ficheService.getnbre_serotherapie().subscribe(data=>{
      this.nbre54Faite=data.Faite;
      this.nbre54NonFaite=data.Nonfaite;
      this.nbre54Moin1=data.Moin1;
      this.nbre54NP=data.NP;

      if ((this.nbre54Faite != undefined) && (this.nbre54NonFaite != undefined) && (this.nbre54Moin1 != undefined) && (this.nbre54NP != undefined)) {
        this.bool56 = true;
      }
    })
    this.ficheService.getnbre_smd().subscribe(data=>{
      this.nbre55Oui=data.Oui;
      this.nbre55Non=data.Non;
      this.nbre55NP=data.NP;
      this.nbre55moin1=data.moin1;

      if ((this.nbre55Oui != undefined) && (this.nbre55Non != undefined) && (this.nbre55NP != undefined) && (this.nbre55moin1 != undefined)) {
        this.bool57 = true;
      }
    })







  }

  SubFiche(varf: any) {

    this.varf1 = varf;


  }

  SubPatient(varp:any){

    this.varp1=varp;

  }

  fcnChart() {

    // pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Male", "Female"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#ebbe0c','#eb6d0c'          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbreMale, this.nbrFemale]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Male", "Female"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbreMale, this.nbrFemale],
          backgroundColor: [
            '#ebbe0c','#eb6d0c'          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });


  }





  fcnChartf1() {

    // pie chart:
    this.PieChart1 = new Chart('pieChart1', {
      type: 'pie',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbreFaite, this.nbreNonFaite,this.nbreMoin1,this.nbreNP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart1 = new Chart('barChart1', {
      type: 'bar',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbreFaite, this.nbreNonFaite,this.nbreMoin1,this.nbreNP],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });


  }








  fcnChartf2() {

    // pie chart:
    this.PieChart2 = new Chart('pieChart2', {
      type: 'pie',
      data: {
        labels: ["Normale", "Diminuee", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre1Normale, this.nbre1Diminuee,this.nbre1Moin1,this.nbre1NP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart2 = new Chart('barChart2', {
      type: 'bar',
      data: {
        labels: ["Normale", "Diminuee", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre1Normale, this.nbre1Diminuee,this.nbre1Moin1,this.nbre1NP],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });


  }





  fcnChartf3() {

    // pie chart:
    this.PieChart3 = new Chart('pieChart3', {
      type: 'pie',
      data: {
        labels: ["Normale", "Dysplasie", "Moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre2Normale, this.nbre2Dysplasie,this.nbre2Moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart3 = new Chart('barChart3', {
      type: 'bar',
      data: {
        labels: ["Normale", "Dysplasie", "Moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre2Normale, this.nbre2Dysplasie,this.nbre2Moin1],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });


    


  }

  
fcnChartf4(){

    // pie chart:
    this.PieChart4 = new Chart('pieChart4', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre3Oui, this.nbre3Non,this.nbre3NP, this.nbre3moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart4 = new Chart('barChart4', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre3Oui, this.nbre3Non,this.nbre3NP, this.nbre3moin1],
          backgroundColor: [
            'rgb(30,144,255)', 'rgb(123,104,238)','#000099','#00cc66'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }



  fcnChartf5(){

    // pie chart:
    this.PieChart5 = new Chart('pieChart5', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre4Oui, this.nbre4Non,this.nbre4NP, this.nbre4moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart5 = new Chart('barChart5', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre4Oui, this.nbre4Non,this.nbre4NP, this.nbre4moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }



  fcnChartf6(){

    // pie chart:
    this.PieChart6 = new Chart('pieChart6', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#d64040','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre5Oui, this.nbre5Non,this.nbre5NP, this.nbre5moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart6 = new Chart('barChart6', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre5Oui, this.nbre5Non,this.nbre5NP, this.nbre5moin1],
          backgroundColor: [
            '#0fcadb', '#d64040','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf7(){

    // pie chart:
    this.PieChart7 = new Chart('pieChart7', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#d64040','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre6Oui, this.nbre6Non,this.nbre6NP, this.nbre6moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart7 = new Chart('barChart7', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre6Oui, this.nbre6Non,this.nbre6NP, this.nbre6moin1],
          backgroundColor: [
            '#0fcadb', '#d64040','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }


  fcnChartf8(){

    // pie chart:
    this.PieChart8 = new Chart('pieChart8', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre7Oui, this.nbre7Non,this.nbre7NP, this.nbre7moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart8 = new Chart('barChart8', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre7Oui, this.nbre7Non,this.nbre7NP, this.nbre7moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }


  fcnChartf9(){

    // pie chart:
    this.PieChart9 = new Chart('pieChart9', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre8Oui, this.nbre8Non,this.nbre8NP, this.nbre8moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart9 = new Chart('barChart9', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre8Oui, this.nbre8Non,this.nbre8NP, this.nbre8moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }


  fcnChartf10(){

    // pie chart:
    this.PieChart10 = new Chart('pieChart10', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre9Oui, this.nbre9Non,this.nbre9NP, this.nbre9moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart10 = new Chart('barChart10', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre9Oui, this.nbre9Non,this.nbre9NP, this.nbre9moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }


  fcnChartf11(){

    // pie chart:
    this.PieChart11 = new Chart('pieChart11', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre10Oui, this.nbre10Non,this.nbre10NP, this.nbre10moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart11 = new Chart('barChart11', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre10Oui, this.nbre10Non,this.nbre10NP, this.nbre10moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf12(){

    // pie chart:
    this.PieChart12 = new Chart('pieChart12', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre11Oui, this.nbre11Non,this.nbre11NP, this.nbre11moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart12 = new Chart('barChart12', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre11Oui, this.nbre11Non,this.nbre11NP, this.nbre11moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf13(){

    // pie chart:
    this.PieChart13 = new Chart('pieChart13', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre12Oui, this.nbre12Non,this.nbre12NP, this.nbre12moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart13 = new Chart('barChart13', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre12Oui, this.nbre12Non,this.nbre12NP, this.nbre12moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf14(){

    // pie chart:
    this.PieChart14 = new Chart('pieChart14', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre13Oui, this.nbre13Non,this.nbre13NP, this.nbre13moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart14 = new Chart('barChart14', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre13Oui, this.nbre13Non,this.nbre13NP, this.nbre13moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf15(){

    // pie chart:
    this.PieChart15 = new Chart('pieChart15', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre14Oui, this.nbre14Non,this.nbre14NP, this.nbre14moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart15 = new Chart('barChart15', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre14Oui, this.nbre14Non,this.nbre14NP, this.nbre14moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf16(){

    // pie chart:
    this.PieChart16 = new Chart('pieChart16', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre15Oui, this.nbre15Non,this.nbre15NP, this.nbre15moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart16 = new Chart('barChart16', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre15Oui, this.nbre15Non,this.nbre15NP, this.nbre15moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf17(){

    // pie chart:
    this.PieChart17 = new Chart('pieChart17', {
      type: 'pie',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre16Oui, this.nbre16Non,this.nbre16NP, this.nbre16moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart17 = new Chart('barChart17', {
      type: 'bar',
      data: {
        labels: ["OUI", "NON", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre16Oui, this.nbre16Non,this.nbre16NP, this.nbre16moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf18(){

    // pie chart:
    this.PieChart18 = new Chart('pieChart18', {
      type: 'pie',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre17Faite, this.nbre17NonFaite,this.nbre17Moin1, this.nbre17NP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart18 = new Chart('barChart18', {
      type: 'bar',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre17Faite, this.nbre17NonFaite,this.nbre17Moin1, this.nbre17NP],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf19(){

    // pie chart:
    this.PieChart19 = new Chart('pieChart19', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre18Oui, this.nbre18Non,this.nbre18NP, this.nbre18moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart19 = new Chart('barChart19', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre18Oui, this.nbre18Non,this.nbre18NP, this.nbre18moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf20(){

    // pie chart:
    this.PieChart20 = new Chart('pieChart20', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre19Oui, this.nbre19Non,this.nbre19NP, this.nbre19moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart20 = new Chart('barChart20', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre19Oui, this.nbre19Non,this.nbre19NP, this.nbre19moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf21(){

    // pie chart:
    this.PieChart21 = new Chart('pieChart21', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre20Oui, this.nbre20Non,this.nbre20NP, this.nbre20moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart21 = new Chart('barChart21', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre20Oui, this.nbre20Non,this.nbre20NP, this.nbre20moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  
  fcnChartf22(){

    // pie chart:
    this.PieChart22 = new Chart('pieChart22', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre21Oui, this.nbre21Non,this.nbre21NP, this.nbre21moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart22 = new Chart('barChart22', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre21Oui, this.nbre21Non,this.nbre21NP, this.nbre21moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf23(){

    // pie chart:
    this.PieChart23 = new Chart('pieChart23', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre22Oui, this.nbre22Non,this.nbre22NP, this.nbre22moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart23 = new Chart('barChart23', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre22Oui, this.nbre22Non,this.nbre22NP, this.nbre22moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf24(){

    // pie chart:
    this.PieChart24 = new Chart('pieChart24', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre23Oui, this.nbre23Non,this.nbre23NP, this.nbre23moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart24 = new Chart('barChart24', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre23Oui, this.nbre23Non,this.nbre23NP, this.nbre23moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf25(){

    // pie chart:
    this.PieChart25 = new Chart('pieChart25', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre24Oui, this.nbre24Non,this.nbre24NP, this.nbre24moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart25 = new Chart('barChart25', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre24Oui, this.nbre24Non,this.nbre24NP, this.nbre24moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf26(){

    // pie chart:
    this.PieChart26 = new Chart('pieChart26', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre25Oui, this.nbre25Non,this.nbre25NP, this.nbre25moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart26 = new Chart('barChart26', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre25Oui, this.nbre25Non,this.nbre25NP, this.nbre25moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf27(){

    // pie chart:
    this.PieChart27 = new Chart('pieChart27', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre26Oui, this.nbre26Non,this.nbre26NP, this.nbre26moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart27 = new Chart('barChart27', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre26Oui, this.nbre26Non,this.nbre26NP, this.nbre26moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf28(){

    // pie chart:
    this.PieChart28 = new Chart('pieChart28', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre27Oui, this.nbre27Non,this.nbre27NP, this.nbre27moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart28 = new Chart('barChart28', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre27Oui, this.nbre27Non,this.nbre27NP, this.nbre27moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf29(){

    // pie chart:
    this.PieChart29 = new Chart('pieChart29', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre28Oui, this.nbre28Non,this.nbre28NP, this.nbre28moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart29 = new Chart('barChart29', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre28Oui, this.nbre28Non,this.nbre28NP, this.nbre28moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf30(){

    // pie chart:
    this.PieChart30 = new Chart('pieChart30', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre29Oui, this.nbre29Non,this.nbre29NP, this.nbre29moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart30 = new Chart('barChart30', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre29Oui, this.nbre29Non,this.nbre29NP, this.nbre29moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf31(){

    // pie chart:
    this.PieChart31 = new Chart('pieChart31', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre30Oui, this.nbre30Non,this.nbre30NP, this.nbre30moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart31 = new Chart('barChart31', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre30Oui, this.nbre30Non,this.nbre30NP, this.nbre30moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf32(){

    // pie chart:
    this.PieChart32 = new Chart('pieChart32', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre31Oui, this.nbre31Non,this.nbre31NP, this.nbre31moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart32 = new Chart('barChart32', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre31Oui, this.nbre31Non,this.nbre31NP, this.nbre31moin1],
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf33(){

    // pie chart:
    this.PieChart33 = new Chart('pieChart33', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre32Oui, this.nbre32Non,this.nbre32NP, this.nbre32moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart33 = new Chart('barChart33', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre32Oui, this.nbre32Non,this.nbre32NP, this.nbre32moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf34(){

    // pie chart:
    this.PieChart34 = new Chart('pieChart34', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre33Oui, this.nbre33Non,this.nbre33NP, this.nbre33moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart34 = new Chart('barChart34', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre33Oui, this.nbre33Non,this.nbre33NP, this.nbre33moin1],
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf35(){

    // pie chart:
    this.PieChart35 = new Chart('pieChart35', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre34Oui, this.nbre34Non,this.nbre34NP, this.nbre34moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart35 = new Chart('barChart35', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre34Oui, this.nbre34Non,this.nbre34NP, this.nbre34moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf36(){

    // pie chart:
    this.PieChart36 = new Chart('pieChart36', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre35Oui, this.nbre35Non,this.nbre35NP, this.nbre35moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart36 = new Chart('barChart36', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre35Oui, this.nbre35Non,this.nbre35NP, this.nbre35moin1],
          backgroundColor: [
            '#f00088', '#07ed8d','#0fcadb','#0b79e6'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf37(){

    // pie chart:
    this.PieChart37 = new Chart('pieChart37', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre36Oui, this.nbre36Non,this.nbre36NP, this.nbre36moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart37 = new Chart('barChart37', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre36Oui, this.nbre36Non,this.nbre36NP, this.nbre36moin1],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf38(){

    // pie chart:
    this.PieChart38 = new Chart('pieChart38', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre37Oui, this.nbre37Non,this.nbre37NP, this.nbre37moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart38 = new Chart('barChart38', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre37Oui, this.nbre37Non,this.nbre37NP, this.nbre37moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf39(){

    // pie chart:
    this.PieChart39 = new Chart('pieChart39', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre38Oui, this.nbre38Non,this.nbre38NP, this.nbre38moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart39 = new Chart('barChart39', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre38Oui, this.nbre38Non,this.nbre38NP, this.nbre38moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf40(){

    // pie chart:
    this.PieChart40 = new Chart('pieChart40', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre39Oui, this.nbre39Non,this.nbre39NP, this.nbre39moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart40 = new Chart('barChart40', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre39Oui, this.nbre39Non,this.nbre39NP, this.nbre39moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf41(){

    // pie chart:
    this.PieChart41 = new Chart('pieChart41', {
      type: 'pie',
      data: {
        labels: ["Faite", "NonFaite", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre40Faite, this.nbre40NonFaite,this.nbre40Moin1, this.nbre40NP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart41 = new Chart('barChart41', {
      type: 'bar',
      data: {
        labels: ["Faite", "NonFaite", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre40Faite, this.nbre40NonFaite,this.nbre40Moin1, this.nbre40NP],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf42(){

    // pie chart:
    this.PieChart42 = new Chart('pieChart42', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre41Oui, this.nbre41Non,this.nbre41NP, this.nbre41moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart42 = new Chart('barChart42', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre41Oui, this.nbre41Non,this.nbre41NP, this.nbre41moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf43(){

    // pie chart:
    this.PieChart43 = new Chart('pieChart43', {
      type: 'pie',
      data: {
        labels: ["Moin1", "Inf10", "Between10Et20", "Sup20"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbcg42Moin1, this.nbcg42Inf10,this.nbcg42Between10Et20, this.nbcg42Sup20]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart43 = new Chart('barChart43', {
      type: 'bar',
      data: {
        labels: ["Moin1", "Inf10", "Between10Et20", "Sup20"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbcg42Moin1, this.nbcg42Inf10,this.nbcg42Between10Et20, this.nbcg42Sup20],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf44(){

    // pie chart:
    this.PieChart44 = new Chart('pieChart44', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre43Oui, this.nbre43Non,this.nbre43NP, this.nbre43moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart44 = new Chart('barChart44', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre43Oui, this.nbre43Non,this.nbre43NP, this.nbre43moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf45(){

    // pie chart:
    this.PieChart45 = new Chart('pieChart45', {
      type: 'pie',
      data: {
        labels: ["Moin1", "Inf10", "Between10Et20", "Sup20"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbcp44Moin1, this.nbcp44Inf10,this.nbcp44Between10Et20, this.nbcp44Sup20]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart45 = new Chart('barChart45', {
      type: 'bar',
      data: {
        labels: ["Moin1", "Inf10", "Between10Et20", "Sup20"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbcp44Moin1, this.nbcp44Inf10,this.nbcp44Between10Et20, this.nbcp44Sup20],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });
  }
  fcnChartf46(){

    // pie chart:
    this.PieChart46 = new Chart('pieChart46', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre45Oui, this.nbre45Non,this.nbre45NP, this.nbre45moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart46 = new Chart('barChart46', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre45Oui, this.nbre45Non,this.nbre45NP, this.nbre45moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf47(){

    // pie chart:
    this.PieChart47 = new Chart('pieChart47', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre46Oui, this.nbre46Non,this.nbre46NP, this.nbre46moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart47 = new Chart('barChart47', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre46Oui, this.nbre46Non,this.nbre46NP, this.nbre46moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf48(){

    // pie chart:
    this.PieChart48 = new Chart('pieChart48', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre47Oui, this.nbre47Non,this.nbre47NP, this.nbre47moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart48 = new Chart('barChart48', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre47Oui, this.nbre47Non,this.nbre47NP, this.nbre47moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf49(){

    // pie chart:
    this.PieChart49 = new Chart('pieChart49', {
      type: 'pie',
      data: {
        labels: ["Virilisation", "Hepatique", "Autre", "Moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre48Virilisation, this.nbre48Hepatique,this.nbre48Autre, this.nbre48Moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart49 = new Chart('barChart49', {
      type: 'bar',
      data: {
        labels: ["Virilisation", "Hepatique", "Autre", "Moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre48Virilisation, this.nbre48Hepatique,this.nbre48Autre, this.nbre48Moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf50(){

    // pie chart:
    this.PieChart50 = new Chart('pieChart50', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre49Oui, this.nbre49Non,this.nbre49NP, this.nbre49moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart50 = new Chart('barChart50', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre49Oui, this.nbre49Non,this.nbre49NP, this.nbre49moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf51(){

    // pie chart:
    this.PieChart51 = new Chart('pieChart51', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre50Oui, this.nbre50Non,this.nbre50NP, this.nbre50moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart51 = new Chart('barChart51', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre50Oui, this.nbre50Non,this.nbre50NP, this.nbre50moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf52(){

    // pie chart:
    this.PieChart52 = new Chart('pieChart52', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre51Oui, this.nbre51Non,this.nbre51NP, this.nbre51moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart52 = new Chart('barChart52', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre51Oui, this.nbre51Non,this.nbre51NP, this.nbre51moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf53(){

    // pie chart:
    this.PieChart53 = new Chart('pieChart53', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre52Oui, this.nbre52Non,this.nbre52NP, this.nbre52moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart53 = new Chart('barChart53', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre52Oui, this.nbre52Non,this.nbre52NP, this.nbre52moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }
  fcnChartf54(){

    // pie chart:
    this.PieChart54 = new Chart('pieChart54', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre53Oui, this.nbre53Non,this.nbre53NP, this.nbre53moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart54 = new Chart('barChart54', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre53Oui, this.nbre53Non,this.nbre53NP, this.nbre53moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf55(){

    // pie chart:
    this.PieChart55 = new Chart('pieChart55', {
      type: 'pie',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre54Faite, this.nbre54NonFaite,this.nbre54Moin1, this.nbre54NP]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart55 = new Chart('barChart55', {
      type: 'bar',
      data: {
        labels: ["Faite", "Nonfaite", "Moin1", "NP"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre54Faite, this.nbre54NonFaite,this.nbre54Moin1, this.nbre54NP],
          backgroundColor: [
            '#f00088', '#d70be6','#0b79e6','#0be642'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }

  fcnChartf56(){

    // pie chart:
    this.PieChart56 = new Chart('pieChart56', {
      type: 'pie',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My first dataset',
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          hoverBackgroundColor: '#24445c',
          borderWidth: 3,
          data: [this.nbre55Oui, this.nbre55Non,this.nbre55NP, this.nbre55moin1]

        }]
      },
      options: {
        animation: {
          animateRotate: false,
          animateScale: true,

        }


      }
    });


    this.BarChart56 = new Chart('barChart56', {
      type: 'bar',
      data: {
        labels: ["Oui", "Non", "NP", "moin1"],
        datasets: [{
          label: 'My second dataset',
          data: [this.nbre55Oui, this.nbre55Non,this.nbre55NP, this.nbre55moin1],
          backgroundColor: [
            '#0fcadb', '#07ed8d','#ebbe0c','#eb6d0c'
          ],
          borderColor:
            'rgb(240,248,255)'
          ,
          borderWidth: 3
        }]
      },
      options: {
        animations: {
          animateRotate: false,
        },
        scales: {
          yAxis: {
            min:0
          }
        }
      }
    });

  }



}