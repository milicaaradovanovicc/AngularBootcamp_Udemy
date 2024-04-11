import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;
  items: { title: string; content: string }[] = [
    { title: 'Why is the sky blue?', content: 'Becouse it is :)' },
    { title: 'What does an orange taste like?', content: 'Like a color :)' },
    { title: 'What color is that cat?', content: 'What cat :)' },
  ];
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
