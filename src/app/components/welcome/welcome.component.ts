import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
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

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.role = this.tokenStorage.getUser().roles;
    console.log("roleWelcome"+this.role);
  }

}
