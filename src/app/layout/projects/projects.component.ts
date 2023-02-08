import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import {projects } from 'src/app/data';
import { Identifiable } from 'src/app/shared/identifiable.model';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from '../../services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})


export class ProjectsComponent implements OnInit{

  projects$!: Observable< Identifiable[]>;
  selectedId = 0;
  isFetching = false;
  loadedProjects: Identifiable[]= [];
  
  constructor(
    private service: ProjectService,
    private route: ActivatedRoute, 
    private http: HttpClient
  ) {}


  projectName = "Nom du projet" 
  projects = projects

  ngOnInit() {
    this.fetchProjects()
    this.projects$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getProjects();
      })
    );
  }
   
  onSave(postData: { name: string; }) {
    // Send Http request

    this.http
      .post<{name:string}>(
        'https://lezz-go-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  private fetchProjects() {
    this.isFetching = true;
    this.http.get<Identifiable[]>('https://lezz-go-default-rtdb.europe-west1.firebasedatabase.app/projects.json')
    .pipe(map(responseData => {
        const projArray = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key))
          projArray.push({...responseData[key]})
        }
        return projArray
    }))
    .subscribe(projs => {
      this.isFetching= false
      this.loadedProjects = projs
    })
  }

  


}
