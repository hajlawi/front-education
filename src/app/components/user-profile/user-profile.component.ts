import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/user';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { UserService } from 'src/app/service/userService/user.service';
import Swal from 'sweetalert2';
import { Image } from '../core/models/image';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  submittedUpdate = false;
  currentUser : User;
  idUser:any;
  profileFormUser: FormGroup;
  updateUserPic: any;
  role:any;
  ListActivity:any;
  exist=false;
  update=false;
  listRes: any;
  modalRef: BsModalRef;
  selectedImg?: File;
  imageDeleteFrom: FormGroup;
  imageurls: any;
  base64String: string;
  name: string;
  imagePath: string;
  currentImage:Blob;
  url: any;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  constructor(private userService: UserService,
    private tokenStorage:TokenStorageService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    //this.currentUser=this.tokenStorage.getUser().id;
    this.getUserById();
    
    this.profileFormUser = this.formBuilder.group({
      nomProfile: [null, Validators.required],
      prenomProfile: [null, [Validators.required]],
      phoneProfile: [null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(8),]],
      emailProfile: [null, Validators.required, Validators.email, Validators.minLength(5)],
    });
    
    this.role = this.tokenStorage.getUser().roles;
    this.viewImage();
  }
//get user by id
getUserById() {
  this.idUser = this.tokenStorage.getUser().id;
  console.log("iddddd  "+this.idUser);

  this.userService.getUser(this.idUser).subscribe(res => {
    this.currentUser = res;
  
    this.exist=true;
   // console.log("userrrrrr"+JSON.stringify(this.currentUser) );
/*this.userService.getImage(this.currentUser.images.id).subscribe(data=>{
  this.currentImage=data; 
  console.log("data  hellooo"+this.currentImage);
});*/
    this.profileFormUser.setValue({
      nomProfile: this.currentUser.nom,
      prenomProfile: this.currentUser.prenom,
      phoneProfile: this.currentUser.numTel,
      emailProfile: this.currentUser.email,


    });
  });
}

get profileUserControls() {
  return this.profileFormUser.controls;
}

showUpdateForm(){
  this.update=true;
}
//update profile
editProfileUser(){
  this.update=false;
  this.submittedUpdate=true;
  if (this.profileFormUser.invalid) {
    console.log("error userUpdate");
    return;
  
  }
  let 
    data = {
      nom: this.profileFormUser.value.nomProfile,
      prenom: this.profileFormUser.value.prenomProfile,
      email: this.profileFormUser.value.emailProfile,
      numTel: this.profileFormUser.value.phoneProfile
     // mdp: this.profileFormUser.value.password,
    };
    this.idUser = this.tokenStorage.getUser().id;
  this.userService
    .updateUser(this.idUser, data)
    .subscribe(
      (response) => {
        console.log("userUpdate"+data);
        console.log(response);
        Swal.fire('Your profile was updated successfully!', '', 'success');
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
      
    );
}


 //select image



onSelectFile(event:any) { // called each time file input changes
  this.selectedImg = event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target?.result;

    }
  }
} 
//for the first time
uploadImage(): void {
  
  if (this.selectedImg) {
    
      this.upload(this.idUser, this.selectedImg);
  }
}
upload(id: any, file: File): void {

    this.userService.addImgUser(id,file).subscribe(
      (response) => {
        console.log(this.selectedImg)
        console.log(response);
        Swal.fire('Picture updated succesfully!', '', 'success');
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }

    );
}

//update image
updateImage(){
  if (this.selectedImg) {
    
    this.updateUserImg(this.idUser, this.selectedImg);
}
}
updateUserImg(id: number, file: File): void {

  this.userService.updateImgUser(id,file).subscribe(
    (response) => {
      console.log(this.selectedImg)
      console.log(response);
      Swal.fire('Picture updated succesfully!', '', 'success');
      window.location.reload();
    },
    (error) => {
      console.log(error);
    }

  );
}

//open modal
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
//reset modal
resetAddForm() {
  
  //this.updateUserPic.reset();
  this.modalRef.hide();
}


imageUploadAction() {
  const imageFormData = new FormData();
  imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);



  this.userService.imageUploadAction(imageFormData, this.idUser).subscribe((response) => {
      if (response.status === 200) {
        this.postResponse = response;
        this.successResponse = this.postResponse.body.message;
       this.viewImage();
      } else {
        this.successResponse = 'Image not uploaded due to some error!';
      }
      console.log(this.successResponse )
    }
    );
  }
  viewImage() {
    this.httpClient.get('http://localhost:8093/api/imageUser/get/image/info/' + this.idUser)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
       //   console.log("ellolllllllllll", this.dbImage )
        }
      );
  }
  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
  
      }
    }
  }
  reloadPage() {
    window.location.reload();
 }
}
