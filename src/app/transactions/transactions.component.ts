import { AgenceService } from './../agences/agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
transactions =[];
message=" Erreur veillez verifier votre accès au serveur backend ..."
iserror=false;
searchText;
  constructor(private agenceService:AgenceService) { }

  ngOnInit(): void {
    this.getAlltransactions();
  }
  getAlltransactions(){
    this.agenceService.getAllTransactions().subscribe((data:any)=>{
      if(data !=null){
        this.transactions=data ;
      }
    },
    eroor=>{
      this.iserror=true;
      console.log("Echec .....");
    }
    )
  }
}
