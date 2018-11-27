import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentStep1Component } from './appointment-step1/appointment-step1.component';
import { AppointmentStep2Component } from './appointment-step2/appointment-step2.component';
import { OutsideComponent } from './outside/outside.component';
import { ExternalUrlDirective } from './external-url.directive';
import {AnswerService} from './answer.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentStep1Component,
    AppointmentStep2Component,
    OutsideComponent,
    ExternalUrlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
