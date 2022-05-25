import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { TokenStorageService } from 'src/app/service/tokenService/token-storage.service';
import { AuthService } from '../core/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 role: string;
  constructor(public loginService: AuthService, private tokenStorage:TokenStorageService,private router: Router,) {
  }

  ngOnInit(): void {
    this.role = this.tokenStorage.getUser().roles;
    console.log("roleheader"+this.role);
    $(window).scroll(() =>{
      let scroll = $(window).scrollTop();
      let box = $('.header-text').height();
      let header = $('header').height();


      if (scroll ) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });


  }
  getProfil(){
    this.role = this.tokenStorage.getUser().roles;
    if(this.role=="ROLE_ENSEIGNANT")
    this.router.navigate(['/mon-profil']);
    else if (this.role=="ROLE_ETUDIANT")
    this.router.navigate(['/profil']);

  }
}
