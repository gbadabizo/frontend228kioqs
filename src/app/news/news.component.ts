import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  message : string;
  success=false;
  failure=false;
  offset =0;
  limit = 10;
  pages:Array<number>;
  news : any ;
  constructor(private agenceService: AgenceService) { }

  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews(){
    this.agenceService.getAllNews(this.offset, this.limit).subscribe((data:any)=>{
      console.log(data);
  if(data !=null){
    this.news= data.content ;
    this.pages = new Array(data.totalPages);
  }
  });
}

setPage(i, event:any){
  event.preventDefault();
  this.offset= i;
  this.getAllNews();

  }
}
