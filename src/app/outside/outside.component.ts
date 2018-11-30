import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss']
})
export class OutsideComponent implements OnInit {
  router: string;
  disabled = true;

  constructor() { }

  ngOnInit() {
  }
  yes(){
    //next page
    this.router = "/step1";
    this.disabled = false;
  }
  no(){
    this.router = "/home";
    this.disabled = false;
  }
}
