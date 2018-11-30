import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsService {
  constructor (
    private http: Http
  ) {}

  getNews() {
    return this.http.get(`https://advocatespedia.com/api.php?hidebots=1&days=7&limit=50&hidecategorization=1&action=feedrecentchanges&feedformat=atom`)
    .map((res:Response) => res.json());
  }

}
