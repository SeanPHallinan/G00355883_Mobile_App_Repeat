import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  champions: any[] =
  [{name: "Bayern Munich", year: "2019-20"},
  {name: "Liverpool", year: "2018-19"},
  {name: "Real Madrid", year: "2017-18"},
  {name: "Real Madrid", year: "2016-17"}
];

}
