import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-all-formation',
  templateUrl: './all-formation.component.html',
  styleUrls: ['./all-formation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllFormationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
