import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../core/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public loginService: AuthService) {
  }

  ngOnInit(): void {

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
}
