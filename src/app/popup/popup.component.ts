import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent {
  closeResult: string | undefined;
  @Input() text: string | undefined;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, {  centered: true, size:'m' });
	}

}
