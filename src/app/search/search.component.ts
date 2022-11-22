import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseholdMember } from '../HouseholdMember';
import { HttpMemberServiceService } from '../http-member-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private memberService: HttpMemberServiceService, private route: Router) { }

 //array of members
  // members = this.memberService.getMembers();
  members:HouseholdMember[];
  
  //search texts
  firstName="";

  lastName="";

  dob="";

  appId="";

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members=data;
    });
  }

  Home() {
    this.route.navigate(['home']);
  }

  Create() {
    this.route.navigate(['create']);
  }

}
