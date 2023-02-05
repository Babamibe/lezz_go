import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ButtonComponent } from './button/button.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ModalComponent } from './modal/modal.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MyCalendarModule } from './calendar.module';
import { DashboardHomeComponent } from './layout/dashboard/dashboard-home/dashboard-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardProjectsComponent } from './layout/dashboard/dashboard-projects/dashboard-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SidenavComponent,
    ModalComponent,
    ProjectBoxComponent,
    LandingPageComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MyCalendarModule,
    NgbModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
