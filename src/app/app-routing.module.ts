import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BookAppoitmentComponent } from './components/book-appoitment/book-appoitment.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/doctor/dashboard/dashboard.component';
import { AccountComponent } from './components/doctor/account/account.component';
import { AnalyticsComponent } from './components/doctor/analytics/analytics.component';
import { InboxComponent } from './components/doctor/inbox/inbox.component';
import { OpenaiComponent } from './components/doctor/openai/openai.component';
import { MainComponent } from './components/main/main.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { TransactionComponent } from './components/doctor/transaction/transaction.component';
import { AppoitmentComponent } from './components/doctor/appoitment/appoitment.component';
import { PatientlistComponent } from './components/doctor/patientlist/patientlist.component';

const routes: Routes = [
  {path:"",component:MainComponent ,children:[
    {path:"",component:HomeComponent},
    {path:"book", component:BookAppoitmentComponent},
    {path:"doctors",component:DoctorsComponent},
    {path:"services",component:ServicesComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"blog",component:BlogComponent},
    {path:"login",component:LoginComponent},
    {path:"CreateAccount",component:RegisterComponent},

  ]},
  {path:"doctor",component:DoctorComponent ,
   children : [{
    path : "", component:DashboardComponent
   },
   {
    path : "account", component:AccountComponent
   },
   {
    path : "analytics", component:AnalyticsComponent
   },
   {
    path : "inbox", component:InboxComponent
   },
   {
    path : "openai", component:OpenaiComponent
   },
   {
    path : "transaction", component:TransactionComponent
   },
   {
    path : "appoitment", component:AppoitmentComponent
   },
   {
    path : "patientlist", component:PatientlistComponent
   }]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
