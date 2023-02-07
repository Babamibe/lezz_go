import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FriendComponent } from './layout/friends/friend/friend.component';
import { FriendsComponent } from './layout/friends/friends.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { ProjectComponent } from './layout/projects/project/project.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LandingPageComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'project/:id', component: ProjectComponent},
  {path: 'signup', component:LandingPageComponent},
  {path: 'friends', component: FriendsComponent},
  {path:'friend/:id', component:FriendComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:"full"},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
