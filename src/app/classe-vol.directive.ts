import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClasseVol]'
})
export class ClasseVolDirective {

  @Input() appClasseVol: string | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    switch (this.appClasseVol) {
      case 'BUSINESS':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'STANDARD':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'PREMIUM':
      this.el.nativeElement.style.color = 'red';
      break;
      default:
        break;
    }
  }

}
