import { AbonnementAgence } from './../models/AbonnementAgence';
import { Agence } from './../models/agence';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
baseUrl = 'http://localhost:8080/api/agence/'  ;
baseUrl2 = 'http://localhost:8080/api/parution/' ;
baseUrl3 = 'http://localhost:8080/api/lecteur/' ;
baseUrl4 = 'http://localhost:8080/api/rapport/' ;
baseUrl5 = 'http://localhost:8080/api/abonnement/'
  constructor(private httpClient:HttpClient) { }

  getAllCategorie():Observable<any>{

    return this.httpClient.get(this.baseUrl+'categories');
  }
  saveAgence(agence:Agence):Observable<Agence>{
   return  this.httpClient.post<Agence>(this.baseUrl+'add', agence);

  }
  getAllAgence():Observable<any>{
    return this.httpClient.get(this.baseUrl+'all');
  }
  addParution( formData : any):Observable<any>{
    return this.httpClient.post(this.baseUrl2+'add', formData);
  }
  editParution( formData : any):Observable<any>{
    return this.httpClient.post(this.baseUrl2+'edit', formData);
  }
  getAllParutionByAgence(id:number):Observable<any>{
   return  this.httpClient.get(this.baseUrl2+'all/'+id);
  }
  getParution(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl2+""+id);
  }
    getFile(id:number):Observable<any>{
  return this.httpClient.get(this.baseUrl2+"pdf/"+id);
  }
  getAllLecteurs(){
    return this.httpClient.get(this.baseUrl3+"all")
  }
  getAllTransactions(){
    return this.httpClient.get(this.baseUrl4+"transactions/all")
  }
  makeRandom(lengthOfCode: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
  getAllAbonnements(){
    return this.httpClient.get(this.baseUrl5+"all");
  }
  getAllAbonnementByAgence(id:number){
    return this.httpClient.get(this.baseUrl5+"agence/"+id);
  }
  addagenceAbonnement(agenceAbonnement: AbonnementAgence){
      return this.httpClient.post(this.baseUrl5+"add", agenceAbonnement);
  }
 deleteAgenceAbn(id:number){
  return this.httpClient.get(this.baseUrl5+"delete/"+id);
}
}
