import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { projects } from '../../data';
import { Identifiable } from 'src/app/search-bar/search-bar.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Identifiable[]> {
    return of(projects);
  }

  getProject(id: number | string) {
    return this.getProjects().pipe(
      // (+) before `id` turns the string into a number
      map((projects: Identifiable[]) => projects.find(project => project.id === +id)!)
    );
  }
}
