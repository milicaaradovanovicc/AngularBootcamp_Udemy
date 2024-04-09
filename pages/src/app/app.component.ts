import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'Beautiful Tuscany',
      url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fHww',
    },
    {
      title: 'Trevi fountain',
      url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Canals in Venice',
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww',
    },
    {
      title: 'City of Verona',
      url: 'https://images.unsplash.com/photo-1555796861-b29396df890e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVyb25hfGVufDB8fDB8fHww',
    },
    {
      title: 'Beautiful Tuscany',
      url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fHww',
    },
    {
      title: 'Trevi fountain',
      url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Canals in Venice',
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww',
    },
    {
      title: 'City of Verona',
      url: 'https://images.unsplash.com/photo-1555796861-b29396df890e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVyb25hfGVufDB8fDB8fHww',
    },
    {
      title: 'Beautiful Tuscany',
      url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fHww',
    },
    {
      title: 'Trevi fountain',
      url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Canals in Venice',
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww',
    },
    {
      title: 'City of Verona',
      url: 'https://images.unsplash.com/photo-1555796861-b29396df890e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVyb25hfGVufDB8fDB8fHww',
    },
    {
      title: 'Beautiful Tuscany',
      url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fHww',
    },
    {
      title: 'Trevi fountain',
      url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Canals in Venice',
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww',
    },
    {
      title: 'City of Verona',
      url: 'https://images.unsplash.com/photo-1555796861-b29396df890e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVyb25hfGVufDB8fDB8fHww',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
