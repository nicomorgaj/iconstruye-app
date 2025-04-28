import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgToastModule, ToasterPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iconstruye-app';

  ToasterPosition = ToasterPosition;
}
