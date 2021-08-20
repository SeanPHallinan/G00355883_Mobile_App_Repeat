import { Component, OnInit } from '@angular/core';
import{ ServicesService } from'../services.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {

  constructor(private service:ServicesService) {}
  
  employees:any = [];

  ngOnInit(){
    this.service.GetWorkerData().subscribe( (data)=>{
      this.employees = data.employees;
      console.log(this.employees);
    } );
  }

}
