import { Component, HostListener, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  isActive = false;
  isActive1 = false;
  clickMeClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    
  }

  ngOnInit() {
    // Call the resetActive method when the component is initialized
    this.resetActive();

  }
  @HostListener('document:click', ['$event'])
  resetActive(event?: MouseEvent) {
    // Check if the clicked element is the "Click me" div
    const clickedElement = event ? event.target as HTMLElement : null;
    if (clickedElement && clickedElement.classList.contains('avatar-container')) {
      // If it is, prevent the reset and emit the custom event
      console.log("hahahahs")
      event?.stopPropagation();
      this.clickMeClicked.emit();
    
    }else{
       console.log("hahahahs"+clickedElement)
    // Reset the isActive property to false for all other clicks
    this.isActive = false;
    }
    if (clickedElement && clickedElement.classList.contains('setting')) {
      // If it is, prevent the reset and emit the custom event
      console.log("haha1s")
      event?.stopPropagation();
      this.clickMeClicked.emit();
      return;
    }else{
       console.log("hahaha1hs"+clickedElement)
    // Reset the isActive property to false for all other clicks
    this.isActive1 = false;
    }
   
   
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
  
  toggleActive1() {
    this.isActive1 = !this.isActive1;
  }
}
