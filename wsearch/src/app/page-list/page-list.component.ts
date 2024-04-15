import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  @Input() pages: {
    title: string;
    wordcount: number;
    snippet: string;
    pageid: string;
  }[] = [];
  xss = `<IMG SRC="javascript:alert('XSS'):">`;
}
