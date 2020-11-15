import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit {
  message : string;
  success=false;
  failure=false;
  offset =0;
  limit = 10;
  pages:Array<number>;
  pubzones : any ;
  constructor(private agenceService:AgenceService) { }

  ngOnInit(): void {
    this.getAllPubsZones();
  }
  getAllPubsZones(){
    this.agenceService.getAllPubsZone(this.offset, this.limit).subscribe((data:any)=>{
      console.log(data);
  if(data !=null){
    this.pubzones= data.content ;
    this.pages = new Array(data.totalPages);
  }
});

}
setPage(i, event:any){
  event.preventDefault();
  this.offset= i;
  this.getAllPubsZones();

  }

}
