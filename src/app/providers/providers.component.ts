import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {
  purposes: string[]=["STI testing", "UTI testing", "Prescription refill", "Immunization shots", "Primary Care", "Health clearance", "Other reason"];
  kinds: string[]=["Medical", "Vision", "Dental","Behavioral Health"];
   message:number;
  // selected:string = kinds[1];


    constructor(private data: DataService) { }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message)
      //this.placeholder = this.purposes[this.message];
    }

}
