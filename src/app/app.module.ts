import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentStep1Component } from './appointment-step1/appointment-step1.component';
import { AppointmentStep2Component } from './appointment-step2/appointment-step2.component';
import { OutsideComponent } from './outside/outside.component';
import { ExternalUrlDirective } from './external-url.directive';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


import {DataService} from './data.service'
import { ProvidersComponent } from './providers/providers.component';
import { AsheComponent } from './ashe/ashe.component';
import { OffsiteComponent } from './offsite/offsite.component';
import { ResultsComponent } from './results/results.component';
import { AvailableComponent } from './available/available.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentStep1Component,
    AppointmentStep2Component,
    OutsideComponent,
    ExternalUrlDirective,
    LoginComponent,
    NavbarComponent,
    ProvidersComponent,
    AsheComponent,
    OffsiteComponent,
    AvailableComponent,
    ConfirmationComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatIconModule,
	BrowserAnimationsModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSelectModule,
	MatExpansionModule,
	MatChipsModule
	],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
