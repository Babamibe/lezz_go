import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import {projects } from 'src/app/data';
import { Identifiable } from 'src/app/shared/identifiable.model';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})


export class ProjectsComponent implements OnInit{

  projects$!: Observable< Identifiable[]>;
  selectedId = 0;

  
  constructor(
    private service: ProjectService,
    private route: ActivatedRoute
  ) {}


  projectName = "Nom du projet" 
  projects = projects

  ngOnInit() {
    this.projects$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getProjects();
      })
    );
  }
   
  

  


}
