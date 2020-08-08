import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.css']
})
export class LecteurComponent implements OnInit {
lecteurs : any;
message=" Erreur veillez verifier votre accès au serveur backend ..."
iserror=false;
searchText;
  constructor(private agenceService:AgenceService) { }

  ngOnInit(): void {
    this.getAllLecteurs();
  }
  getAllLecteurs(){
    this.agenceService.getAllLecteurs().subscribe((data: any)=>{
    this.lecteurs= data
    }, error=>{
      this.iserror=true;
      console.log('faillure');
    })
  }
}
