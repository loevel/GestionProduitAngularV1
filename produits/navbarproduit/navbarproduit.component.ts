import {Component, EventEmitter, Output} from '@angular/core';
import {ActionEvent, ProActionTypes} from "../../../Etat/produit.state";

@Component({
  selector: 'app-navbarproduit',
  templateUrl: './navbarproduit.component.html',
  styleUrls: ['./navbarproduit.component.css']
})
export class NavbarproduitComponent {

 @Output()  produiteventEmitter : EventEmitter<ActionEvent> = new  EventEmitter<ActionEvent>();
  onGetListProduit() {
this.produiteventEmitter.emit({type :ProActionTypes.GET_ALL});
  }

  onGetSelectProduit() {
    this.produiteventEmitter.emit({type :ProActionTypes.GET_SELECT })
  }

  onGetDispoProduit() {
    this.produiteventEmitter.emit({type :ProActionTypes.GET_DISPO})
  }

  onAddProduit() {
    this.produiteventEmitter.emit({type :ProActionTypes.CREER})
  }

  onRechProduit(value: any) {
    this.produiteventEmitter.emit({type :ProActionTypes.RECHERCHE , payload: value})
  }
}
