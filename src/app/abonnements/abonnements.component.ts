import { AgenceService } from './../agences/agence.service';
import { AbonnementAgence } from './../models/AbonnementAgence';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.css']
})
export class AbonnementsComponent implements OnInit {
  permalink: number;
  nomAgence : string ;
  addAbonnementAgenceForm : FormGroup ;
  isSuccessful:boolean;
  isFaillure: boolean;
  abonnements : any ;
  abonnementAgence : AbonnementAgence;
  abonnementsAgences :  any ;

  constructor(private formBuilder : FormBuilder, private agenceService:AgenceService,private router : ActivatedRoute) {
    this.addAbonnementAgenceForm= this.formBuilder.group({
      idabonnement: ['', Validators.required],
      montant: [0, Validators.required],
      montantext: [0, Validators.required],
    })
    this.abonnementAgence={
      code: this.agenceService.makeRandom(4),
      idabonnement:0,
      idagence: this.permalink,
      montant:0,
      montantext:0,
    }
   }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
      this.nomAgence = params['nom'];
    });
    this.getAllAbonementsCateg();
    this.getAllAbonByagence();
  }
  getAllAbonementsCateg(){
      this.agenceService.getAllAbonnements().subscribe((data:any)=>{
          this.abonnements = data ;
      }, error =>{
        this.isFaillure=true
      })
  }
  getAllAbonByagence(){
    this.agenceService.getAllAbonnementByAgence(this.permalink).subscribe((data:any)=>{
      console.log(data);
      this.abonnementsAgences= data ;
    },  error =>{
      this.isFaillure=true
    })
  }
  onSubmit(){
    if(this.addAbonnementAgenceForm.valid){
      this.abonnementAgence={
        code: this.agenceService.makeRandom(4),
        idabonnement: this.addAbonnementAgenceForm.get('idabonnement').value,
        idagence: this.permalink,
        montant: this.addAbonnementAgenceForm.get('montant').value,
        montantext: this.addAbonnementAgenceForm.get('montantext').value
      }
      this.agenceService.addagenceAbonnement(this.abonnementAgence).subscribe((data:any)=>{
        if(data != null){
          this.isSuccessful=true;
          this.getAllAbonByagence();
        }else{
          this.isFaillure=true
        }
      }, error =>{
        this.isFaillure=true
      })
    }

  }
  delete( a :any){
    console.log(a);
    this.agenceService.deleteAgenceAbn(a.idagabn).subscribe((data:any)=>{
      if(data !=null){
        this.isSuccessful=true;
        this.getAllAbonByagence();
      }
      else{
        this.isFaillure=true
      }
    }, error =>{
      this.isFaillure=true
    })

  }

}
