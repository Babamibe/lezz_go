import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
