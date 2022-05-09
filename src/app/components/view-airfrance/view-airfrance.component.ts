import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFiltres } from 'src/app/models/filtres.model';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';
import { PassagerService } from 'src/app/services/passager.service';
import { VolService } from '../../services/vol.service';

@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {

  type: string = 'décollage'
  vols: Vol[] = [];
  passagers: Passager[] = [];
  _volSubscription:Subscription = new Subscription();
  _passagerSubscription:Subscription = new Subscription();
  _routeSubscription:Subscription = new Subscription();

  constructor(private _volService: VolService,
    private _passagerService: PassagerService,
    private _activatedRoute: ActivatedRoute) { }

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
    if(this.type == 'décollages'){
      this._volSubscription = this._volService.getVolsDepart(filtres.aeroport.icao, filtres.debut.getTime()/1000, filtres.fin.getTime()/1000)
        .subscribe((_vols) => {
          this.vols = _vols;
        });
    }else{
      this._volSubscription = this._volService.getVolsArrivee(filtres.aeroport.icao, filtres.debut.getTime()/1000, filtres.fin.getTime()/1000)
        .subscribe((_vols) => {
          this.vols = _vols;
        });
    }
  }

  dispClients(vol: Vol): void {
    this._passagerSubscription = this._passagerService.getPassagers(vol.icao)
      .subscribe((_passagers) => {
        this.passagers = _passagers;
      })
  }

  ngOnInit(): void {
    this._routeSubscription = this._activatedRoute.data.subscribe((data$) => {
      this.type = data$['type'] ? data$['type'] : 'décollage';
    })
  }

  ngOnDestroy(): void {
    this._volSubscription.unsubscribe();
    this._passagerSubscription.unsubscribe();
    this._routeSubscription.unsubscribe();
  }

}
