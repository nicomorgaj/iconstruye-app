import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  httpClient = inject(HttpClient);

  constructor() {}

  getData() {
    return this.httpClient.get<any>('http://localhost:3000/api/dte');
  }

  getShortUrl(item: number) {
    return this.httpClient.post<any>(`http://localhost:3000/api/generate-url`, {
      dteId: item,
    });
  }
}
