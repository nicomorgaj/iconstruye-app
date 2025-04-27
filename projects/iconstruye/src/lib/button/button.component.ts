import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ic-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'large' | null = null;
  @Input() disabled: boolean = false;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  onButtonClick(event: any): void {
    this.onClick.emit(event);
  }
}
