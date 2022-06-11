import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../../service/Matiere/matiere.service';
import { Matiere } from '../../models/matiere.model';
import {Router } from '@angular/router';

@Component({
  selector: 'app-sciences-experimentales',
  templateUrl: './sciences-experimentales.component.html',
  styleUrls: ['./sciences-experimentales.component.css']
})
export class SciencesExperimentalesComponent implements OnInit {

  listMatiere: Matiere[];
  idsection:number=1;
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
