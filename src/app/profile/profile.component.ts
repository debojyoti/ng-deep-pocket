import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private sharedData : SharedDataService
  ) { }

  ngOnInit() {
    this.sharedData.fetchAccounts();
  }

}
