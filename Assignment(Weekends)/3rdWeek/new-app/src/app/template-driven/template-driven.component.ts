import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  setDisable = true;  
  submitData(data:any){
    console.log(data.value)
    alert("Hi! "+data.value.fName+".Please check you EmailID:"+data.value.email+" for more details")
  }
}
