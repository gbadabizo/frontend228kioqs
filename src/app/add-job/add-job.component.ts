import { AgenceService } from './../agences/agence.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  message : string;
  success=false;
  failure=false;
  imageFile : File;
  pdfFile: File;
  categs : any;
  permalink: number
  addJobsForm : FormGroup;
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });
  constructor(private r:Router,private agenceService:AgenceService) {
    this.addJobsForm = new FormGroup({
      titre: new FormControl(null, Validators.required),
      typecontrat: new FormControl(null, Validators.required),
      dateCloture: new FormControl(null, Validators.required),
      adrjob: new FormControl(null, Validators.required),
      pays: new FormControl(null, Validators.required),
      source: new FormControl(null,Validators.required),
      profil: new FormControl(null,Validators.required),
      idcategorie: new FormControl(null,Validators.required),
      dateannonce: new FormControl(null,),
      description: new FormControl(null, Validators.required),
      imageFile: new FormControl(null, Validators.required),
      pdfFile: new FormControl(null),
    });
  }
  getAllCategorie(){
    this.agenceService.getAllJobCategorie().subscribe((data)=>{
      if(data !=null)
     this.categs= data ;
     console.log(this.categs);
    }, error =>{
      this.failure=true;
       this.message= "Une erreur s'est produit verifiez votre connexion !!!!";
    }
    )
  }

  addJobsSubmit(){
    let formData = new FormData();
    formData.append('titre', this.addJobsForm.get('titre').value);
    formData.append('dateCloture', this.addJobsForm.get('dateCloture').value);
    formData.append('typecontrat', this.addJobsForm.get('typecontrat').value);
    formData.append('adrjob', this.addJobsForm.get('adrjob').value);
    formData.append('pays', this.addJobsForm.get('pays').value);
    formData.append('source', this.addJobsForm.get('source').value);
    formData.append('idcategorie', this.addJobsForm.get('idcategorie').value);
    formData.append('profil', this.addJobsForm.get('profil').value);
    formData.append('dateannonce', this.addJobsForm.get('dateannonce').value);
    formData.append('description', this.addJobsForm.get('description').value);
    formData.append('imageFile', this.imageFile);
    formData.append('pdfFile', this.pdfFile);
    console.log(formData.get('imageFile'));
    this.agenceService.addJobs(formData).subscribe((data)=>{
      console.log(data);
      if(data['idjobs']>0){
        this.message= "Enregistrement effectué avec succès";
        this.success=true;
      }else{
        this.message= "Enregistrement echoué";
        this.failure=true;
      }
    }, error=>{
      this.message= "Erreur , verifier votre accès au serveur";
        this.failure=true;
    }
    );
  }
  ngOnInit(): void {
    this.getAllCategorie();
  }

  public onFileSelectedPDF(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);
    this.pdfFile= file;


  }
  public onFileSelectedImage(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.imageFile= file;
    console.log(file);


  }
}
