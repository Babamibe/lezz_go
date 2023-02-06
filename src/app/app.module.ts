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
import { DashboardHomeComponent } from './layout/dashboard/dashboard-home/dashboard-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './layout/projects/projects.component';
import { ProjectComponent } from './layout/projects/project/project.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PopupComponent } from './popup/popup.component';
import { FriendsComponent } from './layout/friends/friends.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    ProjectsComponent,
    ProjectComponent,
    PopupComponent,
    FriendsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    SearchBarComponent
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
