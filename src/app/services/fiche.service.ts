import { Injectable } from '@angular/core';
import { FicheList } from './../../model/fiche-list';
import { Fiche } from './../../model/fiche';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FicheService {

  private baseUrl = environment.host;
  private auth_token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY0NjMyMDk0M30.bm2qufUabUwWK5jf1dX1waO-yT8tH1nH9BY59OLiQIB7n5YLsbp_0plAqu7kOuQVqO5gGwjIfPyU8liUsHQh_A";
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    console.log(this.auth_token);
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token).set('content-type', 'application/json');
    console.log("salut test ...... ");
   }

   getAllFiches(): Observable<Fiche[]>{
    return this.http.get<Fiche[]>(this.baseUrl+"/api/fiches/findAll", { headers: this.headers });
  }
  getAllFicheLists(): Observable<FicheList[]>{
    return this.http.get<FicheList[]>(this.baseUrl+"/api/fiches/findAllFicheListDto", { headers: this.headers });
  }
  saveFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.post<Fiche>(this.baseUrl+"/api/fiches/save",fiche,{ headers: this.headers });
  }
  updateFiche(fiche: Fiche): Observable<Fiche> {
    return this.http.put<Fiche>(this.baseUrl+"/api/fiches/save/"+fiche.idFiche,fiche,{ headers: this.headers });
  }
  deleteFiche(fiche: FicheList): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/api/fiches/delete/"+fiche.idFiche,{ headers: this.headers });
  }
  findFicheById(ficheList: FicheList): Observable<Fiche> {
    return this.http.get<Fiche>(this.baseUrl+"/api/fiches/find/"+ficheList.idFiche,{ headers: this.headers });
  }

  getMF_Patient(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/patients/statSexe", { headers: this.headers });
  }

  getnbre_UIV(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statuiv", { headers: this.headers });
  }

  getnbre_cellu(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcellularite", { headers: this.headers });
  }

  getnbre_morphologie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statmorphologie", { headers: this.headers });
  }
  getnbre_syndromeanemique(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statsyndromeanemique", { headers: this.headers });
  }
  getnbre_syndromehem(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statsyndromehemorragique", { headers: this.headers });
  }
  getnbre_syndromeinf(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statsyndromeinfectieux", { headers: this.headers });
  }
  getnbre_cancer(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcancer", { headers: this.headers });
  }
  getnbre_hypotrophie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stathypotrophie", { headers: this.headers });
  }
  getnbre_troublecroi(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stattroublecroissance", { headers: this.headers });
  }
  getnbre_atteintecut(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statatteintecut", { headers: this.headers });
  }
  getnbre_hyperpigmentation(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stathyperpigmentation", { headers: this.headers });
  }
  getnbre_atteintetete(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statatteintetete", { headers: this.headers });
  }
  getnbre_atteinteoss(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statatteinteoss", { headers: this.headers });
  }
  getnbre_anomaliedig(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomaliedig", { headers: this.headers });
  }
  getnbre_malformationuro(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statmalformationuro", { headers: this.headers });
  }
  getnbre_microcephalie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statmicrocephalie", { headers: this.headers });
  }
  getnbre_microphtalmie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statmicrophtalmie", { headers: this.headers });
  }
  getnbre_echo(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statecho", { headers: this.headers });
  }
  getnbre_decouvertefortuite(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statdecouvertefortuite", { headers: this.headers });
  }
  getnbre_enquetefam(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statenquetefam", { headers: this.headers });
  }
  getnbre_tachecafe(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stattachecafe", { headers: this.headers });
  }
  getnbre_facietriang(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statfacietriang", { headers: this.headers });
  }
  getnbre_traitsfins(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stattraitsfins", { headers: this.headers });
  }
  getnbre_reinfercheval(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statreinfercheval", { headers: this.headers });
  }
  getnbre_reinunique(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statreinunique", { headers: this.headers });
  }
  getnbre_reinectopique(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statreinectopique", { headers: this.headers });
  }
  getnbre_retardpubertaire(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statretardpubertaire", { headers: this.headers });
  }
  getnbre_anomaliepouce(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomaliepouce", { headers: this.headers });
  }
  getnbre_anomalieautredoigts(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomalieautredoigts", { headers: this.headers });
  }
  getnbre_agenesieradius(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statagenesieradius", { headers: this.headers });
  }
  getnbre_anomalieorteil(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomalieorteil", { headers: this.headers });
  }
  getnbre_spinabifida(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statspinabifida", { headers: this.headers });
  }
  getnbre_luxconghanche(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statluxconghanche", { headers: this.headers });
  }
  getnbre_anomalieneuro(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomalieneuro", { headers: this.headers });
  }
  getnbre_retardmental(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statretardmental", { headers: this.headers });
  }
  getnbre_hypoacousie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stathypoacousie", { headers: this.headers });
  }
  getnbre_strabisme(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statstrabisme", { headers: this.headers });
  }
  getnbre_anomaliecardiovas(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statanomaliecardiovas", { headers: this.headers });
  }
  getnbre_echocoeur(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statechocoeur", { headers: this.headers });
  }
  getnbre_endocrinopathie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statendocrinopathie", { headers: this.headers });
  }
  getnbre_congelationcellule(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcongelationcellule", { headers: this.headers });
  }
  getnbre_transfusion(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stattransfusion", { headers: this.headers });
  }
  getnbre_cg(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcg", { headers: this.headers });
  }
  getnbre_chelationFer(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statchelationFer", { headers: this.headers });
  }
  getnbre_cp(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcp", { headers: this.headers });
  }
  getnbre_nilevar(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statnilevar", { headers: this.headers });
  }
  getnbre_oxymetholone(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statoxymetholone", { headers: this.headers });
  }
  getnbre_androtordyl(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statandrotordyl", { headers: this.headers });
  }
  getnbre_toxicite(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/stattoxicite", { headers: this.headers });
  }
  getnbre_enqueteHLA(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statenqueteHLA", { headers: this.headers });
  }
  getnbre_cyclophosphamide(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statcyclophosphamide", { headers: this.headers });
  }
  getnbre_greffefaite(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statgreffefaite", { headers: this.headers });
  }
  getnbre_fludarabine(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statfludarabine", { headers: this.headers });
  }
  getnbre_busulfan(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statbusulfan", { headers: this.headers });
  }
  getnbre_serotherapie(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statserotherapie", { headers: this.headers });
  }
  getnbre_smd(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"/api/fiches/statsmd", { headers: this.headers });
  }
}

