import { Component, OnInit } from '@angular/core';
import {  HostListener, EventEmitter } from '@angular/core';
import { patientService } from 'src/app/patientService';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


// Initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyDyBCZAvxVBMk7S0hFSAtq2cHEmpiFbWlo",
  authDomain: "app-pfe-3237e.firebaseapp.com",
  databaseURL:"https://app-pfe-3237e-default-rtdb.europe-west1.firebasedatabase.app/"
};
firebase.initializeApp(firebaseConfig);
export interface Con {
  id?: string | null; // Make id explicitly optional
  participants: string[];
  createdAt: Date;
  messages: Message[];
}
export default firebase;
interface converstaionLab{
  id:String,
  user1:String,
  user2:String,
  new:number,
  lastmessage:{
    userid:String,
    content:String,
  }
}
interface Message {

  sender: string;
  content: string;
  timestamp: Date;
}
interface converstaion{
  id:number;
  useroneid:number;
  usertwoid:number;
  messages:Message[]
}
interface patient{
  id: number,
  name:String,
  lastname:String ,
  email:String,
  phoneNumber:String ,
  profilePhoto: String,
  appointmentHistory: [
    {
      id: number,
      date: String,
      reason: String
    }
  ]
}
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversations:converstaionLab[]=[]
  CurrentConverstation!:converstaion
  suggestedPatient:patient[]=[]
  isActive = false;
  isConversation=false;
  conv!:Con

  conversation!:Con
  clickMeClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor( private PatientService: patientService ){
    
  }
  ngOnInit(): void {
    this.parseconversations()
    this.resetActive()
 
    this.getconversations()
  }

  @HostListener('document:click', ['$event'])
  resetActive(event?: MouseEvent) {

    const clickedElement = event ? event.target as HTMLElement : null;
    if (clickedElement && clickedElement.classList.contains('input-sugg')) {
   

      event?.stopPropagation();
      this.clickMeClicked.emit();
    
    }else{
     
    this.isActive = false;
    console.log("azd")
    }
 
   
   
  }
  parseconversations(){

  }
  focusSearch() {
    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.focus();
 
  }
  suggestconversation(){
    this.isActive = true;
this.PatientService.getSuggestedPatients().subscribe(key=>{

    this.suggestedPatient=key
  


  console.log(this.suggestedPatient)
})

  }

  openconversation(id:number){
    console.log(id)
    this.isActive=false
    this.isConversation=true
     // Create a new message object
     const newMessage: Message = {
      
      sender: 'YOUR_SENDER_ID',
      content: "dsqd",
      timestamp: new Date()
    };
    this.conversation["messages"].push(newMessage)
  

    // Save the new message to Firebase Realtime Database
    const dbRef = firebase.database().ref(`Conversations/`+this.conversation["id"]+"/messages");
    dbRef.update( this.conversation.messages);

    
  }
  startConverstation(){
     // Generate a unique ID based on participants and creation date
     const participants = ["dqsd", "dasd"]; // Example participants
     const createdAt = new Date(); // Example creation date
     const id = participants.join('_') + '_' + createdAt.getTime().toString();
   
     // Reference the unique ID in the database
     const dbRef = firebase.database().ref(`Conversations`);
     const newPostKey = dbRef.push( 'Conversation').key

     this.conversation = {
       id:newPostKey,// Assign the generated ID to the conversation object
       participants: participants,
       createdAt: createdAt,
       messages: [] // Initialize with an empty array if messages is undefined
     };
     const dbReff = firebase.database().ref(`Conversations/`+newPostKey);
     // Save the conversation to the database
     dbReff.update(  this.conversation   )
   
    
  }
  getconversations(){
    // Create a reference to the "conversations" node
 // Create a reference to the "conversations" node
  const conversationsRef = firebase.database().ref('Conversations');

  // Query the database to find conversations where the participant has userid="aeaz"
  conversationsRef.orderByChild('participants/0').equalTo('dasd').on('value', (snapshot) => {
    // Handle the retrieved data
          // Do something with the conversation data
       
    snapshot.forEach((conversationSnapshot) => {
      const conversation = conversationSnapshot.val();
      // Do something with the conversation data
      console.log(conversation);
    });
  });
  conversationsRef.orderByChild('participants/1').equalTo('dasd').on('value', (snapshot) => {
    // Handle the retrieved data
          // Do something with the conversation data
       
    snapshot.forEach((conversationSnapshot) => {
      const conversation = conversationSnapshot.val();
      // Do something with the conversation data
      console.log(conversation);
    });
  });

  }
}
