import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  constructor() {}

  generateShortUrl(url: string): string {
    const shortUrl = `${this.getCurrentUrl()}document/${btoa(url)}`;
    return shortUrl;
  }

  decodeShortUrl(shortUrl: string): string {
    try {
      const encodedPart = shortUrl.split('/').pop() || '';
      const originalUrl = atob(encodedPart);
      return originalUrl;
    } catch (error) {
      console.error('Error decoding short URL:', error);
      return '';
    }
  }

  getCurrentUrl(): string {
    return window.location.href;
  }
}
