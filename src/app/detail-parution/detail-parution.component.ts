import { AgenceService } from './../agences/agence.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-parution',
  templateUrl: './detail-parution.component.html',
  styleUrls: ['./detail-parution.component.css']
})
export class DetailParutionComponent implements OnInit {
  permalink: number;
  isfaillure:boolean ;
  parution : any;
  constructor(private router : ActivatedRoute, private agenceService : AgenceService) {
    this.parution={
    idparution: 0,
    code: "",
    dateParution: "",
    descPremierTitre: "",
    descSecondTitre: "",
    idagence: 0,
    libelleAgence: "",
    numParution: "",
    premierTitre: "",
    published: 0,
    secondTitre: "",
    status: 1,
    urlFichier: "",
    urlImage: "",
    validated: 0
    }
  }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
    this.getDetailParution();
  }
  getDetailParution(){
    this.agenceService.getParution(this.permalink).subscribe((data:any)=>{
      console.log(data);
      this.parution = data;
    },error=>{
      this.isfaillure=true;
    })
  }



}
