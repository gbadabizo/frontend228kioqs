import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from './../agences/agence.service';
import { Parution } from './../models/parution';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';


@Component({
  selector: 'app-add-parution',
  templateUrl: './add-parution.component.html',
  styleUrls: ['./add-parution.component.css']
})
export class AddParutionComponent implements OnInit {
  addParutionForm : FormGroup;
  parution : Parution;
  imageFile : File;
  pdfFile: File;
  permalink: number
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


    });
  constructor(private agenceService: AgenceService, private router : ActivatedRoute, private r:Router) {
    this.addParutionForm = new FormGroup({
      numParution: new FormControl(null, Validators.required),
      code: new FormControl(this.makeRandom(8), Validators.required),
      dateParution: new FormControl(null, Validators.required),
      premierTitre: new FormControl(null, [ Validators.max(200),Validators.required]),
      secondTitre: new FormControl(null, [ Validators.max(200),Validators.required]),
      descPremierTitre: new FormControl(null, [ Validators.max(250),Validators.required]),
      descSecondTitre: new FormControl(null, [ Validators.max(250),Validators.required]),
      imageFile: new FormControl(null, Validators.required),
      pdfFile: new FormControl(null, Validators.required),
    });
    this.initialize();
   }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      this.permalink = params['id'];
    });
  }
makeRandom(lengthOfCode: number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
  addParutionSubmit(){
    let formData = new FormData();
    formData.append('numParution', this.addParutionForm.get('numParution').value);
    formData.append('code', this.addParutionForm.get('code').value);
    formData.append('dateParution', this.addParutionForm.get('dateParution').value);
    formData.append('premierTitre', this.addParutionForm.get('premierTitre').value);
    formData.append('secondTitre', this.addParutionForm.get('secondTitre').value);
    formData.append('descPremierTitre', this.addParutionForm.get('descPremierTitre').value);
    formData.append('descSecondTitre', this.addParutionForm.get('descSecondTitre').value);
    formData.append('idagence', ""+this.permalink);
    formData.append('imageFile', this.imageFile);
    formData.append('pdfFile', this.pdfFile);
    console.log(formData.get('imageFile'));
    this.agenceService.addParution(formData).subscribe((data:any)=>{
        console.log("data")
        this.r.navigateByUrl("/parutions/"+this.permalink);
    }, error=>{
      console.log("faillure")
    });

  }
  initialize(){
    this.parution= {
      numParution: '',
      code: '',
      dateParution:'',
      premierTitre :'',
      secondTitre:'',
      descPremierTitre:'',
      descSecondTitre:'',

    };
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
