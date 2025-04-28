import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { NgToastService } from 'ng-angular-popup';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
} from '../../../../projects/iconstruye/src/public-api';

import { ShortUrlService } from '../../services/short-url.service';
import { ShortUrlInterface } from '../../interface/short-url.model';
import { DteInterface } from '../../interface/dte.model';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    DialogModule,
    TableModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  shortUrlService = inject(ShortUrlService);
  clipboard = inject(Clipboard);
  toast = inject(NgToastService);

  dte: DteInterface[] = [];
  shortUrl: ShortUrlInterface = { shortUrl: '' };
  visible: boolean = false;
  selectedItem: number = 0;

  ngOnInit() {
    this.shortUrlService.getData().subscribe((res) => {
      this.dte = res;
    });
  }

  generateShortUrl(item: number) {
    this.getShortUrl(item);

    this.selectedItem = item;
    this.visible = true;
  }

  getShortUrl(item: number) {
    this.shortUrlService.getShortUrl(item).subscribe((res) => {
      this.shortUrl = res;
    });
  }

  copyShortUrl() {
    this.clipboard.copy(this.shortUrl.shortUrl || '');
    this.toast.success(
      'El enlace se ha copiado al portapapeles',
      'Enlace copiado',
      3000,
    );
  }
}
