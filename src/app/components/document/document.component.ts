import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortUrlService } from '../../services/short-url.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  imports: [CommonModule],
})
export class DocumentComponent implements OnInit {
  id: string | null = null;
  decodedUrl: string | null = null;
  fileContent: string | null = null;

  constructor(
    private shortUrlService: ShortUrlService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        try {
          this.decodedUrl = this.shortUrlService.decodeShortUrl(this.id);
          console.log('Decoded URL:', this.decodedUrl);
          this.loadFile(this.decodedUrl);
        } catch (error) {
          console.error('Error decoding URL:', error);
        }
      } else {
        console.error('No ID found in the URL');
      }
    });
  }

  loadFile(url: string) {
    console.log('Cargando archivo desde:', `/assets/DTE/${url}.xml`);
    this.http
      .get(`/assets/DTE/${url}.xml`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          console.log('Archivo cargado:', data);
          this.fileContent = data;
        },
        error: (error) => {
          this.fileContent = 'Archivo no encontrado';
        },
      });
  }
}
