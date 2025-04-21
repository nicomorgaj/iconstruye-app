import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ButtonComponent,
  InputComponent,
  CardComponent,
} from '../../projects/iconstruye/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, InputComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iconstruye-app';
}
