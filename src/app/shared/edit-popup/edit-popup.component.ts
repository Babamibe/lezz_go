import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent {
  closeResult: string | undefined;
  @Input() text: string | undefined;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, {  centered: true, size:'m' });
	}

}
