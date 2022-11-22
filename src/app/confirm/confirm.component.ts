import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpMemberServiceService } from '../http-member-service.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  constructor(
    private memberService: HttpMemberServiceService,
    private route: Router
  ) {}

  applicationId = 0;

  ngOnInit(): void {
    this.applicationId = this.memberService.getApplicationId();
  }

  Home() {
    this.route.navigate(['home']);
  }

  Create() {
    this.route.navigate(['create']);
  }

  Search() {
    this.route.navigate(['search']);
  }
}
