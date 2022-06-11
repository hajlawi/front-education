import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Matiere } from 'src/app/models/matiere.model';
import { MatiereService } from 'src/app/service/Matiere/matiere.service';

@Component({
  selector: 'app-mathematiques',
  templateUrl: './mathematiques.component.html',
  styleUrls: ['./mathematiques.component.css']
})
export class MathematiquesComponent implements OnInit {


  listMatiere: Matiere[];
  idsection:number=3;
  constructor(private serviceMatiere:MatiereService,  
    private router: Router) { }

  ngOnInit(): void {
   this.getMatier(this.idsection);
  }

  getMatier(id:number){
    this.serviceMatiere.getMatiere(id).subscribe(  (response)=>{
      console.log("list"+JSON.stringify(response));
      this.listMatiere=response;
    })
  }
  
  showDocument(matieres: Matiere ){
    console.log(matieres);
    this.router.navigate(['document'+'/'+matieres['id']]);

  }

}
