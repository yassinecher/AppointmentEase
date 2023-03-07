import { Component } from '@angular/core';
import {faPersonWalkingArrowRight ,faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faLocationDot=faLocationDot
  faEnvelope=faEnvelope
  faPhone=faPhone
  faYoutube=faYoutube
  faFacebook=faFacebook
  faInstagram=faInstagram
  faPersonWalkingArrowRight=faPersonWalkingArrowRight
  inputVal:any = "";
}
