import { JobCategorie } from './../models/jobCategorie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcategorie',
  templateUrl: './jobcategorie.component.html',
  styleUrls: ['./jobcategorie.component.css']
})
export class JobcategorieComponent implements OnInit {
  categForm : FormGroup ;
  categorie : JobCategorie;
  categs : any;
  message : string;
  success=false;
  failure=false;
  constructor(private agenceService:AgenceService) {
    this.categForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      description : new FormControl('', Validators.required)

     } );
     this.categorie={
       libelle:'',
       description:''
     }
     ;
   }

  ngOnInit(): void {
    this.getAllCategorie();
  }
  onSubmit(){
    this.categorie.libelle = this.categForm.get('libelle').value ;
    this.categorie.description = this.categForm.get('description').value ;
   this.agenceService.addJobCategorie(this.categorie).subscribe((data)=>{
     if(data['idcategorie'] > 0){
        this.message= "Enregistrement effectué avec succès";
        this.success=true;
        this.getAllCategorie();
     }else{
       this.failure=true;
       this.message= "Enregistrement echoué !!!!";
     }
   }, error=>{
    this.failure=true;
    this.message= "Enregistrement echoué !!!!";
   }
   )
  }
  getAllCategorie(){
    this.agenceService.getAllJobCategorie().subscribe((data)=>{
      if(data !=null)
     this.categs= data ;
     console.log(this.categs);
    }, error =>{
      this.failure=true;
       this.message= "Une erreur s'est produit verifiez votre connexion !!!!";
    }
    )
  }

}
