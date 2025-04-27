import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
} from '../../../../projects/iconstruye/src/public-api';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ButtonComponent, InputComponent, CardComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  constructor(private shortUrlService: ShortUrlService) {}

  data: any = [
    {
      dte: 'F437T33',
      rut: '12345678-9',
      type: 'Factura Electrónica',
    },
  ];

  generateURL(event: any) {
    console.log('Button clicked!', event);
    const newUrl = this.shortUrlService.generateShortUrl(event);
    console.log('Generated URL:', newUrl);
  }
}
