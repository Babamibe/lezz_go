import { switchMap } from 'rxjs/operators';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ProjectService } from '../projects.service';
import { Identifiable } from 'src/app/shared/identifiable.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{

  project$!: Observable<Identifiable>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService,
  ) {}


  ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProject(params.get('id')!))
    );
  }


  gotoProjects(project: Identifiable) {
    const projectId = project ? project.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/projects', { id: projectId, foo: 'foo' }]);
  }

}
