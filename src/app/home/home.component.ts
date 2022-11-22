import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HouseholdMember } from '../HouseholdMember';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  memberPlaceholder:HouseholdMember;

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }

  Create() {
    this.route.navigate(['create']);
  }

  Search() {
    this.route.navigate(['search']);
  }

}
