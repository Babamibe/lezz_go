import { Component, Input } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Identifiable } from '../shared/identifiable.model';


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
