import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  type: string = 'Décollages';

  constructor(private _router: Router) { }

  toDecollages(): void {
    this.type = 'Décollages';
    this._router.navigateByUrl(`/decollages`);
  }

  toAtterrisages(): void {
    this.type = 'Atterrissages';
    this._router.navigateByUrl(`/atterrissages`);
  }

}
