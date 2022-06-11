import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { UserService } from 'src/app/service/userService/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil-dialog',
  templateUrl: './update-profil-dialog.component.html',
  styleUrls: ['./update-profil-dialog.component.css']
})
export class UpdateProfilDialogComponent implements OnInit {
  @Input() displayBasic: boolean;

  @Input() profileFormUser: FormGroup;
  @Input() submittedUpdate: boolean;

  @Output() onChangeValues = new EventEmitter<any>();

  idUser: number;
  constructor( private userService : UserService, 
    private tokenStorage:TokenStorageService ) { }

  ngOnInit(): void {
  }
  editProfileUser(){
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
        numTel: this.profileFormUser.value.phoneProfile,
        biography:this.profileFormUser.value.biography,
        specialite:this.profileFormUser.value.specialite,
        
       // mdp: this.profileFormUser.value.password,
  
      };
      this.idUser = this.tokenStorage.getUser().id;
    this.userService
      .updateUser(this.idUser, data)
      .subscribe(
        (response) => {
     
          console.log("userUpdate"+data);
          console.log(response);
          this.displayBasic=false;
          this.onChangeValues.emit(this.displayBasic);
          Swal.fire('Your profile was updated successfully!', '', 'success');
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
        }
        
      );
      
  }
  
  get profileUserControls() {
    return this.profileFormUser.controls;
  }

  onCloseDialog(){
    this.onChangeValues.emit(false);
  }

}
