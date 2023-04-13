import { Component } from '@angular/core';

import { AnimationItem } from 'lottie-web/build/player/lottie_light';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
    public lottieConfig: AnimationOptions = {
    path: 'assets/animations/LoginAnimation.json',
    loop: true,
    autoplay: true,
  };

}
