import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() classNames = '';

  @Input() data: { [key: string]: any }[] = [];
  @Input() headers: { key: string; label: string }[] = [];
}
