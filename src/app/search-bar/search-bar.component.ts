import { Component, Input } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Identifiable } from './search-bar.model';
// type Identifiable = { id: number; name: string };
// const projects: Identifiable[] = [
// 	{ id: 0, name: 'Vacances Paris 2022' },
// 	{ id: 1, name: 'Le ski entre copines' },
// 	{ id: 2, name: 'Parteey' },
// 	{ id: 3, name: 'Playa et margarita' },
// 	{ id: 4, name: 'En amoureux' },
// 	{ id: 5, name: 'California baby' },
// 	{ id: 6, name: 'Vamos!' },
// 	{ id: 7, name: 'Programme mars 2023' },
// 	{ id: 8, name: 'Avec les potos' },
// 	{ id: 9, name: 'Repos bien mérité' },
// 	{ id: 10, name: 'On part et on ne revient pas!' }
// ];

// const friends: Identifiable[] = [
//     { id: 0, name: 'Pat500' },
//     { id: 1, name: 'MarieLo' },
//     { id: 2, name: 'Fionina' },
//     { id: 3, name: 'Lili' },
//     { id: 4, name: 'Jeje96' },
//     { id: 5, name: 'Raphifou' },
//     { id: 6, name: 'Bimbamboum' },
//     { id: 7, name: 'Esthae' },
//     { id: 8, name: 'AlineDesBonsJours' },
//     { id: 9, name: 'Dinonodi' },
//     { id: 10, name: 'Vandv' }
//   ];

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
	imports: [NgbTypeaheadModule, FormsModule, JsonPipe],
})
export class SearchBarComponent {
	@Input() recherche: String | undefined;
	@Input() data!: Identifiable[];
  public model: Identifiable|undefined;

	formatter = (identifiable: Identifiable) => identifiable.name;

	search: OperatorFunction<string, readonly { id: any; name: any }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			filter((term) => term.length >= 2),
			map((term) => this.data.filter((project: { name: string; }) => new RegExp(term, 'mi').test(project.name)).slice(0, 10)),
		);
}
