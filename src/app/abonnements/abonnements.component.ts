import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonnements',
  templateUrl: './abonnements.component.html',
  styleUrls: ['./abonnements.component.css']
})
export class AbonnementsComponent implements OnInit {
  permalink: number;
  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
  }

}
