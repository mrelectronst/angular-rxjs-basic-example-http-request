import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

interface CallResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<CallResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID V9Dxai9ts2E_zIno5qCcLTxNLQMcnIzWqcpZaSdaM6s',
        },
      }
    );
  }
}
