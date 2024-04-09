import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input() backgroundColor: string = '';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'orange';
  }
}
