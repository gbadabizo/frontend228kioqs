import { Router } from '@angular/router';
import { AgenceService } from './../agences/agence.service';
import { Categorie } from './../models/categorie';
import { Agence } from './../models/agence';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-agence',
  templateUrl: './add-agence.component.html',
  styleUrls: ['./add-agence.component.css']
})
export class AddAgenceComponent implements OnInit {
  addAgenceForm : FormGroup;
  agence : Agence ;
  categories: any;
  isSuccessful:boolean;
  isFaillure: boolean;

  constructor(private formBuilder : FormBuilder, private agenceService:AgenceService, private router: Router) {
    this.addAgenceForm = this.formBuilder.group({
      nom :['', Validators.required],
      code:[this.makeRandom(4), Validators.required],
      description:'',
      adresse:'',
      email:'',
      periodicite:['', Validators.required],
      telephone1:['', Validators.required],
      telephone2:'',
      prixUnit:['', Validators.required],
      idCategorie: ['', Validators.required],
      numFlooz:'',
      numTmoney:''

    });
    this.agence={
      nom:'',
      code:'',
      description:'',
      adresse:'',
      email:'',
      periodicite:'',
      telephone1:'',
      telephone2:'',
      prixUnit: 0.0,
      idCategorie: 0,
      status:1,
      numFlooz:'',
      numTmoney:'',
    }
   }

  ngOnInit(): void {
      this.agenceService.getAllCategorie().subscribe((data:any)=>{

          this.categories=data ;
          console.log(this.categories);

      }, error=>{
        console.log("error")
      }
      );
  }
  onSubmit(){
    if(this.addAgenceForm.valid){
        this.agence= this.addAgenceForm.value;
        console.log(this.agence);
        this.agenceService.saveAgence(this.agence).subscribe((data:Agence)=>{
          this.isSuccessful=true;
          this.router.navigateByUrl('/agences')
        }, error=>{
            this.isFaillure=true;
        }
        );
    }

  }
makeRandom(lengthOfCode: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }



}
