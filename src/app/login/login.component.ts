import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;

	constructor(private router: ActivatedRoute, private location: Location) { }

	ngOnInit() {
	}

	login() {

	}

}
