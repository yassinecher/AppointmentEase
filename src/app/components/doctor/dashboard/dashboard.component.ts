import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables,ChartConfiguration } from 'node_modules/chart.js';
import { Observable, of } from 'rxjs';
Chart.register(...registerables)
interface patientData{
  name:String,
  data: number
}
interface Patient{
  id:String,
  name:String,
  title:String,
  lastname:String,
  gender:String,
  profilePicture:String

}
interface paymentData{
  patient:Patient,
  appoitment: String,
  Date:String,
  payment:{
    amount:number,
    methode:String
  },
  Statu:String

}
const last3Payments: Observable<paymentData[]>=of([
  {
    patient:{id:"#DC216",
             name:"Scott",
             title: "Mr.",
             lastname:"mctominay",
             gender:"male",
            profilePicture:"male.jpg"},
            appoitment: "Diabetes Control",
            Date:"Dec 15 2023",
            payment:{
              amount:200,
              methode:"Credit Card"
            },
            Statu:"Success"
  },
  {
    patient:{id:"#DC218",
             name:"Alicia",
             lastname:"Brook",
             gender:"female",
             title: "Mrs.",
            profilePicture:"female.jpg"},
            appoitment: "Monthly Medical Check-up",
            Date:"Dec 16 2023",
            payment:{
              amount:200,
              methode:"Credit Card"
            },
            Statu:"Pending"
  },
  {
    patient:{id:"#DC220",
             name:"Robert",
             lastname:"White",
             title: "Mr.",
             gender:"male",
            profilePicture:"male.jpg"},
            appoitment: "Root Canal",
            Date:"Dec 17 2023",
            payment:{
              amount:200,
              methode:"Google"
            },
            Statu:"Failed"
  }
])
const getpatientdata: Observable<patientData[]> = of([{
  name:"Treatment",data:56},{
  name:"Check-up",data: 21},{
  name:"operation2",data: 15
},{
  name:"operation2",data: 52
},{
  name:"operation3",data: 10
}]);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartRef!: ElementRef;
  @ViewChild('chart2', { static: true }) chartRef2!: ElementRef;
  username = "Yassine Cherni";
  lastPayments:paymentData[]=[]
  patientDatas1:patientData[] = []; 
  colors=[
    '#1D3EAF',
    '#FF4C5E',
    '#848FAC'
  ]
  constructor(){
  }
  calcpercentage(number:number){

    var s = 0
    for( let k of this.patientDatas1){
      s+=k["data"]
    }
   return Math.round((number*100/s + Number.EPSILON) * 100) / 100
  }
  color(d:patientData){
    let c=0
    let c1=0
for(let k of this.patientDatas1){
  if(k===d){
   c1=c
  }else{
    c++
  }
}
return this.colors[c1]
  }
  ngOnInit(): void {
    getpatientdata.subscribe(key => {
      for( const k of key ){
        this.patientDatas1.push(
          {
            name:k["name"],
            data:k["data"]
           }
         )
      }
    });
    last3Payments.subscribe(key => {
      for( const k of key ){
        this.lastPayments.push(
          {
            patient:k["patient"],
            appoitment:k["appoitment"],
            Date:k["Date"],
            payment:k["payment"],
            Statu:k["Statu"]
           }
         )
      }
    });
    this.sortdetails()
    this.RenderOChart()
    this.RenderOChart2()
  }
  sortdetails(){
    this.patientDatas1.sort((a,b)=>(a.data<b.data)?1:-1)
  
    if(this.patientDatas1.length>3){
      var other=0
      for(var i=2;i<this.patientDatas1.length;i++){
        other+=this.patientDatas1[i].data
      }
      this.patientDatas1=this.patientDatas1.slice(0,2)
      this.patientDatas1.push({name:"others",data:other})
    }

  }
  RenderOChart() {
    var data =[]
    var labels=[]
    for(let k of this.patientDatas1){
      data.push(k["data"])
      labels.push(k["name"])
    }
    const chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'patients data',
          data: data,
          backgroundColor: [
            '#1D3EAF',
            '#FF4C5E',
            '#848FAC'
          ],
          hoverOffset: 4
          
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout:70,
        plugins: {
          
          legend: {
            display: false,
           
          }
        }
      }
    } );
  }
  RenderOChart2() {
    var data = [];
    var labels = [];
    for (let k of this.patientDatas1) {
      data.push(k["data"]);
      labels.push(k["name"]);
    }
    for (let k of this.patientDatas1) {
      data.push(k["data"]);
      labels.push(k["name"]);
    }
    for (let k of this.patientDatas1) {
      data.push(k["data"]);
      labels.push(k["name"]);
    }
    const maxDataValue = Math.max(...data)
    const yAxisMax = Math.ceil(maxDataValue / 10) * 10 ; // Round up to the nearest 10
  
    const chart = new Chart(this.chartRef2.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'patients data',
          data: data,
          backgroundColor:
            '#afcdfddb',
          hoverBackgroundColor: "#AAC4F9",
          borderWidth: 0,
          
  
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          
          x: {
            grid: {
              display: false,
              drawBorder: false
  
            }
          },
          y: {
            grid: {
              drawBorder: false,
              borderDash: [10, 10],
              borderDashOffset: 2,
              tickBorderDash: [2, 2, 2, 2, 2, 2],
              
            
            },
            ticks: {
              callback: function(value) {
                // Return the calculated tick values
                if (value === yAxisMax) {
                  return ''; // Hide the last tick label
                } else {
                  return value;
                }
              },
              
            
            }, max:yAxisMax
          },
         
        },
        plugins: {
  
          legend: {
            display: false,
  
          }
        } ,elements: {
          bar: {
            borderRadius: 20 // Set the border radius for the data points
          }
        }
      }
    });
  }
  
  
}