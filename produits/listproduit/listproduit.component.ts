import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProActionTypes} from "../../../Etat/produit.state";
import {ProduitModel} from "../../../model/produit.model";


@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent {
 @Input() produits$:Observable<AppDataState<ProduitModel[]>>| null = null;
 @Output()  proEventEmiter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
 protected readonly DataStateEnum = DataStateEnum;

  onSupprime(po: ProduitModel) {
    this.proEventEmiter.emit({
      type:ProActionTypes.SUPPRIME,
      payload:po
    });
  }

  onSelect(po: ProduitModel) {
          this.proEventEmiter.emit({
              type:ProActionTypes.SELECT,
                payload:po
                                  });
          }


  onModifie(po: ProduitModel) {
    this.proEventEmiter.emit({
      type:ProActionTypes.EDIT,
      payload:po
    });
  }

  onActionEvent($event: ActionEvent) {
this.proEventEmiter.emit($event);
  }
}
