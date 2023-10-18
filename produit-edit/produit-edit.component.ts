import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitsService} from "../../services/produits.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit{
  poser = inject(ProduitsService) ;
  activatedRoute = inject(ActivatedRoute);
  fb = inject(FormBuilder) ;
  po: FormGroup;
  idpo :number = this.activatedRoute.snapshot.params?.['id'];
  de:any;

ngOnInit(){
  this.poser.getProduit(this.idpo)
    .subscribe(pro=>{

    this.po =  this.fb.group({

          id:[pro.id,Validators.required],
          name:[pro.name,Validators.required],
          prix:[pro.prix,Validators.required],
          quantite:[pro.quantite,Validators.required],
          selectionne:[pro.selectionner,Validators.required],
          disponible:[pro.disponible,Validators.required],
        });


    })
}

  onModifie() {
this.poser.ModifieProduit(this.po.value)
  .subscribe(
    data =>{
      alert(" all done !");
    }
  )
  }
}
