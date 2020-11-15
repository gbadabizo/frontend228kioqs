import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AgencesComponent } from './agences/agences.component';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import { DetailAgenceComponent } from './detail-agence/detail-agence.component';
import { ParutionsComponent } from './parutions/parutions.component';
import { AddParutionComponent } from './add-parution/add-parution.component';
import { EditParutionComponent } from './edit-parution/edit-parution.component';
import { DetailParutionComponent } from './detail-parution/detail-parution.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AbonnementsComponent } from './abonnements/abonnements.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobcategorieComponent } from './jobcategorie/jobcategorie.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DetailJobComponent } from './detail-job/detail-job.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { AddPubComponent } from './add-pub/add-pub.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AgencesComponent,
    AddAgenceComponent,
    DetailAgenceComponent,
    ParutionsComponent,
    AddParutionComponent,
    EditParutionComponent,
    DetailParutionComponent,
    LecteurComponent,
    TransactionsComponent,
    AbonnementsComponent,
    JobsComponent,
    JobcategorieComponent,
    AddJobComponent,
    DetailJobComponent,
    NewsComponent,
    AddNewsComponent,
    PubliciteComponent,
    AddPubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    EditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(
      [
        {path:'', component: HomeComponent},
        {path:'login', component: LoginComponent},
        {path:'home', component: HomeComponent},
        {path:'transactions', component: TransactionsComponent},
        {path:'add-agence', component: AddAgenceComponent},
        {path:'add-news', component: AddNewsComponent},
        {path:'news', component: NewsComponent},
        {path:'agences', component: AgencesComponent},
        {path:'lecteur', component: LecteurComponent},
        {path:'job-categorie', component: JobcategorieComponent},
        {path:'add-job', component: AddJobComponent},
        {path:'publicites', component: PubliciteComponent},
        {path:'add-pub', component: AddPubComponent},
        {path:'detail-job/:id', component: DetailJobComponent},
        {path:'jobs', component: JobsComponent},
        {path:'add-parution/:id', component: AddParutionComponent},
        {path:'parutions/:id', component: ParutionsComponent},
        {path:'detail-parution/:id', component: DetailParutionComponent},
        {path:'edit-parution/:id', component: EditParutionComponent},
        {path:'abonnements/:id/:nom', component: AbonnementsComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
