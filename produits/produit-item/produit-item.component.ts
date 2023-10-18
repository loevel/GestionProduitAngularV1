import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProduitModel} from "../../../model/produit.model";
import {ActionEvent, ProActionTypes} from "../../../Etat/produit.state";

@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.css']
})
export class ProduitItemComponent {
@Input() po : ProduitModel;
@Output() eventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();


  onSelect(po: any) {
this.eventEmitter.emit({type:ProActionTypes.SELECT,payload:po});
  }

  onModifie(po: any) {
    this.eventEmitter.emit({type:ProActionTypes.EDIT,payload:po});
  }

  onSupprime(po: any) {
    this.eventEmitter.emit({type:ProActionTypes.SUPPRIME,payload:po});
  }
}
