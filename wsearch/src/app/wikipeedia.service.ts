import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

//Use map and optional chaining:
//`pluck('foo', 'bar')` is `map(x => x?.foo?.bar)`

interface WikipediaResponse {
  query: {
    search: {
      pageid: number;
      title: string;
      snipet: string;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipeediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(map((x) => x?.query?.search));
  }
}
