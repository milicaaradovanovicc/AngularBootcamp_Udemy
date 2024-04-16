import { Component } from '@angular/core';
import { WikipeediaService } from './wikipeedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // pages: {
  //   title: string;
  //   wordcount: number;
  //   snippet: string;
  //   pageid: string;
  // }[] = [];
  pages: any[] = [];
  constructor(private wikipedia: WikipeediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
