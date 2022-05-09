import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
  @Input() vol: Vol | undefined;
  @Input() type: string | undefined;
  @Output() getCommand = new EventEmitter<Vol>();
}
