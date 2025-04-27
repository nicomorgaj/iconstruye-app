import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'ic-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
}
