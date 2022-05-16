import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

}
