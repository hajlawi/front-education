import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './service/tokenService/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  role: any;


  constructor(private tokenStorage:TokenStorageService) {
  }

  ngOnInit() {
    this.role = this.tokenStorage.getUser().roles;
    console.log("roleWelcome"+this.role);
  }


}
