import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public lottieConfig: AnimationOptions = {
    path: 'assets/animations/registerAnimation.json',
    loop: true,
    autoplay: true,
  };
}
