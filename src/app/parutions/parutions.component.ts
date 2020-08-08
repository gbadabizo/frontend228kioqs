import { AgenceService } from './../agences/agence.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parutions',
  templateUrl: './parutions.component.html',
  styleUrls: ['./parutions.component.css']
})
export class ParutionsComponent implements OnInit {
  permalink: number;
  parutions: any;
  constructor(private router : ActivatedRoute, private agenceService:AgenceService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
    this.getAllParutions()
  }
  getAllParutions(){
    this.agenceService.getAllParutionByAgence(this.permalink).subscribe((data:any)=>{
      console.log(data);
        this.parutions=data;
    }, eroor=>{
      console.log("Echec .....");
    })
  }

}
