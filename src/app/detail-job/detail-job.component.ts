import { AgenceService } from './../agences/agence.service';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {
  permalink: number
  job: any;
  jobs:any;
  idcateg :number;
  message: string;
  failure: boolean;
  constructor(private router : ActivatedRoute, private  agenceService:AgenceService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
    this.getJob();

  }
  ngAfterViewInit(){
    if (this.idcateg !== undefined) {
      this.getJobsCategorie();
     }
  }
getJob(){
  this.agenceService.getJobById(this.permalink).subscribe((data:any)=>{
      console.log(data);
      this.job= data;
      this.idcateg= data.categorie;
}, error=>{
  this.failure=true;
this.message= "Erreur verifier la connexion au serveur";
});
}
getJobsCategorie(){
  this.agenceService.getJobsByCateg(this.idcateg).subscribe((data:any)=>{
    console.log(data);
    this.jobs= data ;

  }, error=>{
    this.failure=true;
    this.message= "Erreur verifier la connexion au serveur";
  })
}

}
