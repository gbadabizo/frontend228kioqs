import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  message : string;
  success=false;
  failure=false;
  offset =0;
  limit = 10;
  pages:Array<number>;
  jobs : any ;
  constructor(private agenceService:AgenceService) {

   }

  ngOnInit(): void {
    this.getAllJobs();
  }
  getAllJobs(){
    this.agenceService.getAllJobs(this.offset, this.limit).subscribe((data:any)=>{
      console.log(data);
  if(data !=null){
    this.jobs= data.content ;
    this.pages = new Array(data.totalPages);
  }
});

}
setPage(i, event:any){
  event.preventDefault();
  this.offset= i;
  this.getAllJobs();

  }
}
