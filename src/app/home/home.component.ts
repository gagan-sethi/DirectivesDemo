import { Component } from '@angular/core';
import { NgClass, NgFor,NgIf } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
user="LPU"
students:any =[
  {
    name:"Atul",
    fees:5000,
    studentImage:'https://picsum.photos/200/300'
  },
  {
    name:"Rahul",
    fees:0,
    studentImage:'https://picsum.photos/200/300'
  },
  {
    name:"Vijaya Lakshmi",
    fees:10000,
    studentImage:'https://picsum.photos/200/300'
  }
]

}
