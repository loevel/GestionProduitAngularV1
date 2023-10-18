import {AfterViewInit, Component, inject} from '@angular/core';
import {ProduitsService} from "../../services/produits.service";
import {ProduitModel} from "../../model/produit.model";
import {catchError, map, Observable, of, pipe, startWith} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProActionTypes} from "../../Etat/produit.state";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent  {
/*version 1 */
  /*proser = inject(ProduitsService);
  produits: ProduitModel[] | null= null;
  onGetListProduit() {
 this.proser.getListeProduits().subscribe(data =>{
   this.produits=data;
 },error => {
   console.log(error);
 })}*/
submitted:boolean=false;
  route = inject(Router);
  proser = inject(ProduitsService);
  /*produits$:Observable<ProduitModel[]> | null = null;*/
  produits$:Observable<AppDataState<ProduitModel[]>>| null = null;
  protected readonly DataStateEnum = DataStateEnum;
  onGetListProduit() {
    this.produits$ =
        this.proser.getListeProduits()
          .pipe(
            map(data =>  ({dataState :DataStateEnum.LOADED, data:data })),
            startWith({dataState : DataStateEnum.LOADING} ),
            catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

            );
      }
  onGetSelectProduit() {
   /* this.produits$ = this.proser.getProduitsSelectionner();*/
    this.produits$ =
      this.proser.getProduitsSelectionner()
        .pipe(
          map(data =>  ({dataState :DataStateEnum.LOADED, data:data })),
          startWith({dataState : DataStateEnum.LOADING} ),
          catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

        );
  }
  onGetDispoProduit() {
   /* this.produits$ = this.proser.getProduitsDisponible();*/
    this.produits$ =
      this.proser.getProduitsDisponible()
        .pipe(
          map(data =>  ({dataState :DataStateEnum.LOADED, data:data })),
          startWith({dataState : DataStateEnum.LOADING} ),
          catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

        );
  }
  onRechProduit(f: any) {
   /* this.produits$ = this.proser.getProduitsDisponible();*/
    this.produits$ =
      this.proser.rechercheProduit(f.key)
        .pipe(
          map(data =>  ({dataState :DataStateEnum.LOADED, data:data })),
          startWith({dataState : DataStateEnum.LOADING} ),
          catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

        );
  }
  onSelect(po: ProduitModel) {
this.proser.selectProduit(po)
  .subscribe( data=>{
     po.selectionner=data.selectionner ;

  })
  }
  onSupprime(po: ProduitModel) {
    alert("voulez-vous vraiment supprimer ?") ;
this.proser.supprimeProduit(po)
  .subscribe(data=>{
  this. onGetListProduit();
})

  }
  onModifie(po: ProduitModel) {
    this.route.navigateByUrl("/modifieproduit/"+po.id);
  }
  onAddProduit() {
      this.route.navigateByUrl("/addproduit");
  }


  onActionEmit($event:ActionEvent) {
  switch ($event.type){
    case ProActionTypes.GET_ALL:this.onGetListProduit();break;
    case ProActionTypes.GET_SELECT:this.onGetSelectProduit();break;
    case ProActionTypes.GET_DISPO:this.onGetDispoProduit(); break;
    case ProActionTypes.RECHERCHE:this.onRechProduit($event.payload); break;
    case ProActionTypes.CREER:this.onAddProduit(); break;
    case ProActionTypes.SELECT:this.onSelect($event.payload); break;
    case ProActionTypes.SUPPRIME:this.onSupprime($event.payload); break;
    case ProActionTypes.EDIT:this.onModifie($event.payload); break;
  }
  }


}
