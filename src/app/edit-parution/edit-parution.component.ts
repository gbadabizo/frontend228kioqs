import { FileUploader } from 'ng2-file-upload';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AgenceService } from './../agences/agence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-parution',
  templateUrl: './edit-parution.component.html',
  styleUrls: ['./edit-parution.component.css']
})
export class EditParutionComponent implements OnInit {
  permalink: number;
  parution : any;
  isfaillure:boolean ;
  imageFile : File;
  pdfFile: File;
  editParutionForm : FormGroup;
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });
  constructor(private router : ActivatedRoute, private agenceService : AgenceService, private r:Router) {
    this.initialize();


  }
  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
    this.getDetailParution();
    this.editParutionForm = new FormGroup({
      numParution: new FormControl(this.parution.numParution,),
      code: new FormControl([this.parution.code,]),
      dateParution: new FormControl([this.parution.dateParution,Validators.required]),
      premierTitre: new FormControl(this.parution.premierTitre, ),
      secondTitre: new FormControl(this.parution.secondTitre,),
      descPremierTitre: new FormControl(this.parution.descPremierTitre,),
      descSecondTitre: new FormControl(this.parution.descSecondTitre,),
      imageFile: new FormControl('', Validators.required),
      pdfFile: new FormControl('', Validators.required),
    });
  }
  getDetailParution(){
    this.agenceService.getParution(this.permalink).subscribe((data:any)=>{
      console.log(data);
      this.parution = data;
    },error=>{
      this.isfaillure=true;
    })
  }
  editParutionSubmit(){
    let formData = new FormData();
    formData.append('idParution', ""+this.permalink);
    formData.append('numParution', this.editParutionForm.get('numParution').value);
    formData.append('code', this.editParutionForm.get('code').value);
    formData.append('dateParution', this.editParutionForm.get('dateParution').value);
    formData.append('premierTitre', this.editParutionForm.get('premierTitre').value);
    formData.append('secondTitre', this.editParutionForm.get('secondTitre').value);
    formData.append('descPremierTitre', this.editParutionForm.get('descPremierTitre').value);
    formData.append('descSecondTitre', this.editParutionForm.get('descSecondTitre').value);
    formData.append('idagence', ""+this.parution.idagence);
    formData.append('imageFile', this.imageFile);
    formData.append('pdfFile', this.pdfFile);
    console.log(formData)
    this.agenceService.editParution(formData).subscribe((data:any)=>{
        console.log("data")
        this.r.navigateByUrl("/detail-parution/"+this.permalink);
    }, error=>{
      this.isfaillure=true
      console.log("faillure")
    });

  }
  initialize(){
    this.parution={
      idparution: 0,
      code: "",
      dateParution: "",
      descPremierTitre: "",
      descSecondTitre: "",
      idagence: 0,
      libelleAgence: "",
      numParution: "",
      premierTitre: "",
      published: 0,
      secondTitre: "",
      status: 1,
      urlFichier: "",
      urlImage: "",
      validated: 0
      }
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
