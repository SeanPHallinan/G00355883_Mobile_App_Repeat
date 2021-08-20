import { Component, OnInit } from '@angular/core';
import{ ServicesService } from'./services.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private service:ServicesService) {}
  
  hidden:any = false;
  numOfTimes:any = 0;
  employees:any = [];

count():void{
  this.numOfTimes++;
}

/*show(){
  if(this.hidden == true){
   this.hidden = false;
  } 
  
  else  {
      this.hidden = true;
    }
  }*/

  ngOnInit(){
    this.service.GetWorkerData().subscribe( (data)=>{
      this.employees = data.employees;
      console.log(this.employees);
    } );
  }
}
