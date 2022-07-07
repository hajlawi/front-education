import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {OwlOptions} from "ngx-owl-carousel-o";
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { UserService } from 'src/app/service/userService/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  contactForm : FormGroup;
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items:3
      }
    },
    nav: true
  }

role:any;

  constructor(private tokenStorage:TokenStorageService,private userService: UserService,
    private formBuilder: FormBuilder,) { }


  ngOnInit(): void {
    this.role = this.tokenStorage.getUser().roles;
    console.log("roleWelcome"+this.role);
    this.contactForm = this.formBuilder.group({
      nom :[null, Validators.required],
      email: [null,
         [Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      subject: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  contactUs(){
    //this.submittedAContact = true;
    if (this.contactForm.invalid) {
      return;
    }
  
    let 
      data = {
        nom: this.contactForm.value.nom,
        email: this.contactForm.value.email,
        sujet: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        
      };
    
  console.log(data)
  
    this.userService.contactUs(data).subscribe(
      data => {
        console.log(data);
        Swal.fire('message sent successufully !', '', 'success');
       // this.submittedAContact = false;
        this.ngOnInit();
      },
      error => {
        console.log(error);
        Swal.fire('Please insert a valid Email !', '', 'error');

      });
  
   
  }

}
