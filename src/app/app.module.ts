import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    AbonnementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    RouterModule.forRoot(
      [
        {path:'', component: HomeComponent},
        {path:'login', component: LoginComponent},
        {path:'home', component: HomeComponent},
        {path:'transactions', component: TransactionsComponent},
        {path:'add-agence', component: AddAgenceComponent},
        {path:'agences', component: AgencesComponent},
        {path:'lecteur', component: LecteurComponent},
        {path:'add-parution/:id', component: AddParutionComponent},
        {path:'parutions/:id', component: ParutionsComponent},
        {path:'detail-parution/:id', component: DetailParutionComponent},
        {path:'edit-parution/:id', component: EditParutionComponent},
        {path:'abonnements/:id', component: AbonnementsComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
