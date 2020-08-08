import { Agence } from './../models/agence';
import { AgenceService } from './agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {
agences:Agence[];

  constructor(private agenceService : AgenceService) { }

  ngOnInit(): void {
    this.getAllAgence();
  }
  getAllAgence(){
    this.agenceService.getAllAgence().subscribe((data:any)=>{
      this.agences = data
    }, error=>{
      console.log('faillure');
    })
  }

}
