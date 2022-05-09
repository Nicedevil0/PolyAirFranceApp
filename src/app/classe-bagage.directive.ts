import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClasseBagage]'
})
export class ClasseBagageDirective {

  @Input() appClasseVolForBagage: string | undefined;
  @Input() appClasseBagage: number | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    switch (this.appClasseVolForBagage) {
      case 'BUSINESS':
        if(this.appClasseBagage != undefined && this.appClasseBagage > 2){
          this.el.nativeElement.style.backgroundColor = 'red';
        }
        break;
      case 'STANDARD':
        if(this.appClasseBagage != undefined && this.appClasseBagage > 1){
          this.el.nativeElement.style.backgroundColor = 'red';
        }
        break;
      case 'PREMIUM':
        if(this.appClasseBagage != undefined && this.appClasseBagage > 3){
          this.el.nativeElement.style.backgroundColor = 'red';
        }
      break;
      default:
        break;
    }
  }

}
