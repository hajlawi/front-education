import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.scss']
})
export class PasswordForgottenComponent implements OnInit {
  submitForgett: boolean;
  forgotPwdForm: FormGroup;
  resetToken: string;
  constructor( private formBuilder: FormBuilder,
    private userService: UserService,) { }

  ngOnInit(): void {
    this.forgotPwdForm = this.formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]});
  }
  get forgotPwdControls() {
    return this.forgotPwdForm.controls;
  }
 //generate random string
 stringGen(len: number) {
  var text = '';
  
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}
//reset Paswword
sendResetPwdMail(){
  this.submitForgett=true;
  console.log(this.forgotPwdForm.value);
  this.resetToken=this.stringGen(32);
  localStorage.setItem('resetToken', this.resetToken);
  let data = {
      email: this.forgotPwdForm.value.email,
      resetToken : this.resetToken
  }
  console.log(data);
  this.userService.sendMailResetMdp(data).subscribe(
    res => {
      Swal.fire('A link was sent to your email !', 'success');
    },
    (error) => {
      Swal.fire('Email doesn\'t exist', '', 'error');
      console.log(error);
    }
  );
}
}
