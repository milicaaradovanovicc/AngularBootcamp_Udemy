import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  term = '';

  updateTerm(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.term = inputElement.value;
    }
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
  }
}
