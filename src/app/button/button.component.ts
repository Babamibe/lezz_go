import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() input: string |undefined;
@Output() myClick = new EventEmitter();

handleClick() {
    this.myClick.emit()
  }
} 
