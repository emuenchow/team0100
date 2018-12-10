import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule , ActivatedRouteSnapshot } from '@angular/router';

import {AppointmentStep1Component} from './appointment-step1/appointment-step1.component';
import {HomeComponent} from './home/home.component';
import {AppointmentStep2Component} from './appointment-step2/appointment-step2.component';
import {OutsideComponent} from './outside/outside.component';
import {LoginComponent} from'./login/login.component';
import {ProvidersComponent} from './providers/providers.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team0100', component: HomeComponent },
  { path: 'step1', component: AppointmentStep1Component },
  { path: 'step2', component: AppointmentStep2Component },
  { path: 'outside', component: OutsideComponent },
  { path: 'login', component: LoginComponent },
  { path: 'providers', component: ProvidersComponent },
  {path: 'externalRedirect',
  canActivate: [externalUrlProvider],
  component: HomeComponent}
];


@NgModule({
    providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {
                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_self');
            },
        },
    ],
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
