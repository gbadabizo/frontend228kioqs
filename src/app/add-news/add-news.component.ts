import { AgenceService } from './../agences/agence.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  message : string;
  success=false;
  failure=false;
  imageFile : File;
  imageFile1 : File;
  imageFile2 : File;
  imageFile3 : File;
  imageFile4 : File;
  pdfFile: File;
  categs : any;
  permalink: number
  addNewsForm : FormGroup;
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });
  constructor(private r:Router,private agenceService:AgenceService) {

    this.addNewsForm = new FormGroup({
      titre: new FormControl(null, Validators.required),
      datePublication: new FormControl(null, Validators.required),
      source: new FormControl(null,Validators.required),
      contenu: new FormControl(null, Validators.required),
      imageFile: new FormControl(null, Validators.required),
      urlVideo: new FormControl(null),
      pdfFile: new FormControl(null),
      imageFile1: new FormControl(null),
      imageFile2: new FormControl(null),
      imageFile3: new FormControl(null),
      imageFile4: new FormControl(null),
    });
   }

  ngOnInit(): void {
  }


  addNewsSubmit(){
    let formData = new FormData();
    formData.append('titre', this.addNewsForm.get('titre').value);
    formData.append('datePublication', this.addNewsForm.get('datePublication').value);
    formData.append('source', this.addNewsForm.get('source').value);
    formData.append('contenu', this.addNewsForm.get('contenu').value);
    formData.append('imageFile', this.imageFile);
    formData.append('imageFile1', this.imageFile1);
    formData.append('imageFile2', this.imageFile2);
    formData.append('imageFile3', this.imageFile3);
    formData.append('imageFile4', this.imageFile4);
    formData.append('pdfFile', this.pdfFile);
    console.log(formData.get('imageFile'));
    this.agenceService.addNews(formData).subscribe((data)=>{
      console.log(data);
      if(data['idnews']>0){
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
  public onFileSelectedImage1(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.imageFile1= file;
    console.log(file);


  }
  public onFileSelectedImage2(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.imageFile2= file;
    console.log(file);


  }
  public onFileSelectedImage3(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.imageFile3= file;
    console.log(file);


  }
  public onFileSelectedImage4(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.imageFile4= file;
    console.log(file);


  }
}
