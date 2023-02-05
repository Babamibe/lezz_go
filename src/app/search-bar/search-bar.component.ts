import { Component } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

type Project = { id: number; name: string };
const states: Project[] = [
	{ id: 0, name: 'Vacances Paris 2022' },
	{ id: 1, name: 'Le ski entre copines' },
	{ id: 2, name: 'Parteey' },
	{ id: 3, name: 'Playa et margarita' },
	{ id: 4, name: 'En amoureux' },
	{ id: 5, name: 'California baby' },
	{ id: 6, name: 'Vamos!' },
	{ id: 7, name: 'Programme mars 2023' },
	{ id: 8, name: 'Avec les potos' },
	{ id: 9, name: 'Repos bien mérité' },
	{ id: 10, name: 'On part et on ne revient pas!' }
];

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
	imports: [NgbTypeaheadModule, FormsModule, JsonPipe],
})
export class SearchBarComponent {
	recherche = "projet"
  public model: Project | undefined;

	formatter = (project: Project) => project.name;

	search: OperatorFunction<string, readonly { id: any; name: any }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			filter((term) => term.length >= 2),
			map((term) => states.filter((project) => new RegExp(term, 'mi').test(project.name)).slice(0, 10)),
		);
}
