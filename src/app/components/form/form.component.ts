import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
} from '../../../../projects/iconstruye/src/public-api';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    DialogModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  shortUrlService = inject(ShortUrlService);

  data: any = [];
  visible: boolean = false;

  ngOnInit() {
    this.shortUrlService.getData().subscribe((res) => {
      this.data = res;
    });
  }

  generateShortUrl(item: any) {
    this.shortUrlService.getShortUrl(item).subscribe((res) => {
      this.visible = true;
      console.log(res);
    });
  }
}
