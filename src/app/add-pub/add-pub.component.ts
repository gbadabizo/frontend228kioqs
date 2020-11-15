import {AgenceService} from './../agences/agence.service';
import { Router} from '@angular/router';
import { FileUploader} from 'ng2-file-upload';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  IDropdownSettings
} from 'ng-multiselect-dropdown';
import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-add-pub',
  templateUrl: './add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {
  message: string;
  success = false;
  failure = false;
  imageFile: File;
  zones :any;
  permalink: number
  addPubForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities = [];
  selectedItems = [];
  dropdownSettings: any = {};
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


  });
  constructor(private r: Router, private agenceService: AgenceService) {
    this.addPubForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      dateDebut: new FormControl(null, Validators.required),
      dateFin: new FormControl(null, Validators.required),
      imageFile: new FormControl(null, Validators.required),
      zone: new FormControl(),
    });
  }

  ngOnInit() {
    this.getAllZone()
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'idzone',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: this.ShowFilter
    };
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 14
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: null
      });
    }
  }
  addPubSubmit() {
    let listZone= this.addPubForm.get('zone').value;
    let zoneids="";
    listZone.forEach(lz => {
      zoneids += lz.idzone+",";
    });
    let formData = new FormData();
    formData.append('description', this.addPubForm.get('description').value);
    formData.append('dateDebut', this.addPubForm.get('dateDebut').value);
    formData.append('dateFin', this.addPubForm.get('dateFin').value);
    formData.append('imageFile', this.imageFile);
    formData.append('zone', zoneids);
    this.agenceService.addPub(formData).subscribe((data)=>{
      console.log(data);
      if(data['idpublicite']>0){
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
  public onFileSelectedImage(event: EventEmitter < File[] > ) {
    const file: File = event[0];
    this.imageFile = file;
    console.log(file);
  }
  getAllZone(){
    this.agenceService.getAllZone().subscribe((data)=>{
      if(data !=null)
     this.zones= data ;
     console.log(this.zones);
    }, error =>{
      this.failure=true;
       this.message= "Une erreur s'est produit verifiez votre connexion !!!!";
    }
    )
  }
}
