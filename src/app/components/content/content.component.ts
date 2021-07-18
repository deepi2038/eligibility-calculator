import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  myModel=100000;
  expense=50000;
  constructor() { }

  ngOnInit(): void {
  }

}
