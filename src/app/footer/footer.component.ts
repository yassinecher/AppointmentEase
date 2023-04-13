import { Component } from '@angular/core';
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faLocationDot=faLocationDot
  faEnvelope=faEnvelope
  faPhone=faPhone
  faYoutube=faYoutube
  faFacebook=faFacebook
  faInstagram=faInstagram
}
