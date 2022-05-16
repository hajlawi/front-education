import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/user';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { UserService } from 'src/app/service/userService/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  submittedUpdate = false;
  currentUser : User;
  id:any;
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
  url: any;
  constructor(private userService: UserService,
    private tokenStorage:TokenStorageService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
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
      emailProfile: [null, Validators.required],
      images: [null, Validators.required],
    });
    
    this.role = this.tokenStorage.getUser().roles;
  }
//get user by id
getUserById() {
  this.id = this.tokenStorage.getUser().id;
  this.userService.getUser(this.id).subscribe((res: User) => {
    this.exist=true;
    this.currentUser = res;
    console.log(this.currentUser);
    this.profileFormUser.setValue({
      nomProfile: this.currentUser.nom,
      prenomProfile: this.currentUser.prenom,
      phoneProfile: this.currentUser.numTel,
      emailProfile: this.currentUser.email,
      images:this.currentUser.images,

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
    return;
  }
  let 
    data = {
      nom: this.profileFormUser.value.nomProfile,
      prenom: this.profileFormUser.value.prenomProfile,
      email: this.profileFormUser.value.emailProfile,
      numTel: this.profileFormUser.value.phoneProfile,
      //mdp: this.updateFormUser.value.password,
    };

  this.userService
    .updateUser(this.currentUser.id, data)
    .subscribe(
      (response) => {
        console.log(data);
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
    
      this.upload(this.id, this.selectedImg);
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
    
    this.updateUserImg(this.id, this.selectedImg);
}
}
updateUserImg(id: any, file: File): void {

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
}
