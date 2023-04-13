import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [slideInAnimation]
})
export class MainComponent {
  public lottieConfig: AnimationOptions = {
    path: 'assets/animations/background.json',
    loop: true,
    autoplay: true,
  };
  
  constructor() {}
}
