import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  restPwd: FormGroup;
  resetToken : string;
  reset=false;
  token: string | null;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    this.restPwd = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]]});
  }
  get restPwdControls() {
    return this.restPwd.controls;
  }

   //reset Paswword
   ResetPwd(){
    console.log(this.restPwd.value)
    this.reset=true;
    let data = {
      password: this.restPwd.value.password,
      resetToken : this.token
  }
    this.userService.resetMdp(data).subscribe(
      (res) => {
        console.log(res)
        Swal.fire('Password changed successfully !', 'success');
      },
      (error) => {
        console.log(error);
      }
    );
    localStorage.clear();
  }
}
