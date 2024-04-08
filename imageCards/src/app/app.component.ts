import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Mountain',
      username: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'I saw this awesome mountain today',
    },
    {
      title: 'Biking',
      username: 'biking1222',
      imageUrl: 'assets/biking.jpeg',
      content: 'I have cool bike',
    },
  ];
}
