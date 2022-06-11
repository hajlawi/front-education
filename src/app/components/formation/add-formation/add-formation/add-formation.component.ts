import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormationService } from 'src/app/service/formation.service/formation.service';
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { Formation } from 'src/app/models/formation.model';
import { Video } from '../../../../models/video.model';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  modalRef: BsModalRef;
  selectedVd?: File;
  url: any;
  uploadedVd: File;
idEnseignant:number;
postResponse: any;
successResponse: string;
formation: FormGroup;
  constructor( private modalService: BsModalService,private httpClient: HttpClient,   private formBuilder: FormBuilder, private router: Router, private tokenStorage:TokenStorageService,
    private formationService:FormationService) { }

  ngOnInit(): void {
    this.idEnseignant = this.tokenStorage.getEnseignant();
    //console.log("currentEnseignant"+this.idEnseignant )

      
    this.formation = this.formBuilder.group({
      nom: ['', [Validators.required]],
      description: [null, [Validators.required]],
      section: [null, [Validators.required]],
      langue: [null, [Validators.required]],
      prix: [null, [Validators.required]],
     // video: [null, [Validators.required]]
    });
  }
//open modal
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

 //select image



 onSelectFile(event:any) { // called each time file input changes
  this.selectedVd = event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target?.result;

    }
  }
} 

imageUploadAction() {
  const imageFormData = new FormData();
  imageFormData.append('image', this.uploadedVd, this.uploadedVd.name);



  this.formationService.imageUploadAction(imageFormData, this.idEnseignant).subscribe((response) => {
      if (response.status === 200) {
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
      // this.viewImage();
      } else {
        this.successResponse = 'Image not uploaded due to some error!';
      }
      console.log(this.successResponse )
    }
    );
  }

  public onImageUpload(event: any) {
   this.uploadedVd = event.target.files[0];
   this.url = event.target?.result;
    /*if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
  
      }
    }*/
  }
//reset modal
resetAddForm() {
  
  //this.updateUserPic.reset();
  
  this.modalRef.hide();
}


/*onSaveFormation(formFormation:any){
  this.formation=formFormation;


    
}*/

onSubmit() {


 // formationForm.Video=this.selectedVd

 this.formationService.saveFormation2(this.formation).subscribe((data: 
  {}) => {
        this.router.navigate(['/ajout-formation'])
      })
      alert('SUCCESS!! :-)');
//this.onSaveFormation(this.formation);


}

}
