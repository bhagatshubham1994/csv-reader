import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  // Remote CSV File
  remoteCovidData = 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1VYSEk3cWhVdmUtZmtaam1sbDh2bnROV015QXxBQ3Jtc0tuVUV1WDEzSFVidTdDQVJyOXZHb2dSVW9rbHpocXVCOXRWZnUyaV9ZakdqdlhTcVdfMXc1TU1LZWtfQXdWUFc1TFU3ZmNQX18yV2VYU2pvb05GOUR5clhMNndPMl9pQ1pfV1h1RDh6SkVuYjF6RzlpYw&q=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fmap-data-cases.csv';

  // Local CSV file
  localCovidData = '../assets/map-data-cases.csv'

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.localCovidData, {responseType: 'text'});
  }
}
