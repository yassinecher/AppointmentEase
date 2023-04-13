import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule ,FaIconLibrary  } from '@fortawesome/angular-fontawesome';

import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookAppoitmentComponent } from './components/book-appoitment/book-appoitment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponentComponent } from './components/chat-component/chat-component.component';
import { CursorEffectDirective } from './cursor-effect.directive';
import { DashboardComponent } from './components/doctor/dashboard/dashboard.component';

import { AccountComponent } from './components/doctor/account/account.component';
import { InboxComponent } from './components/doctor/inbox/inbox.component';
import { OpenaiComponent } from './components/doctor/openai/openai.component';
import { MainComponent } from './components/main/main.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { TransactionComponent } from './components/doctors/transaction/transaction.component';
import { AppoitmentComponent } from './components/doctors/appoitment/appoitment.component';
import { PatientlistComponent } from './components/doctors/patientlist/patientlist.component';
export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    GalleryComponent,
    ServicesComponent,
    DoctorsComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BookAppoitmentComponent,
    ChatComponentComponent,
    CursorEffectDirective,
    DashboardComponent,

    AccountComponent,
    InboxComponent,
    OpenaiComponent,
    MainComponent,
    DoctorComponent,
    TransactionComponent,
    AppoitmentComponent,
    PatientlistComponent,
   
  ],
  imports: [HttpClientModule,BrowserModule, FormsModule,AppRoutingModule, FontAwesomeModule,  FontAwesomeModule,BrowserAnimationsModule,LottieModule.forRoot({ player: playerFactory })],
  providers: [FaIconLibrary],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}
