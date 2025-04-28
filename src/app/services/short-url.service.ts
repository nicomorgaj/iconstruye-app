import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  httpClient = inject(HttpClient);

  constructor() {}

  getData() {
    return this.httpClient.get<any>(`${environment.apiUrl}/dte`);
  }

  getShortUrl(item: number) {
    return this.httpClient.post<any>(`${environment.apiUrl}/generate-url`, {
      dteId: item,
    });
  }
}
