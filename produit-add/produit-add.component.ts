import {booleanAttribute, Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitsService} from "../../services/produits.service";

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit{
private fb = inject(FormBuilder);
 pro : FormGroup ;
 proser = inject(ProduitsService);
submitted:boolean= false;
  ngOnInit(){
    this.pro  =  this.fb.group({
      name:["",Validators.required],
      prix:[0,Validators.required],
      quantite:[0,Validators.required],
      selectionne:[true,Validators.required],
      disponible:[true,Validators.required],
    });

  }


  onCree() {
    this.submitted=true;
    if(this.pro.invalid) return ;

    this.proser.CreeProduit(this.pro.value)
      .subscribe(data=>{
        console.log(this.pro.value);
        alert("Enregistrer avec succes "  );
      })
  }

  protected readonly name = name;
}
