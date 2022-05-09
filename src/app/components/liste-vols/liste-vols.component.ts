import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Output() dispClientsEvent = new EventEmitter<Vol>();
  @Input() vols : Vol[] | undefined;
  @Input() type : string | undefined;

  /**
   * On affiche les clients du vol passé en paramètre
   */
   dispClients(vol: Vol): void {
    this.dispClientsEvent.emit(vol);
  }
}
