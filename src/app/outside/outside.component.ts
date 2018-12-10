import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss']
})
export class OutsideComponent implements OnInit {
  router: string;
  disabled = true;
  message;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.dateO.subscribe(message => this.message = message)
  }
  yes(){
    //next page
    this.router = "/providers";
    this.disabled = false;
  }
  no(){
    this.router = "/home";
    this.disabled = false;
  }

}
