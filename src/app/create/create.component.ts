import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseholdMember } from '../HouseholdMember';
import { HttpMemberServiceService } from '../http-member-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  memberModel = new HouseholdMember();

  private msg: Object;

  isDirty = true;

  isValid = true;

  errorMsg = '';

  firstMember: HouseholdMember;

  constructor(
    private memberService: HttpMemberServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.memberModel = this.memberService.getSavedMember();
  }

  isGenderValid(gender: string) {
    if (gender == '') return false;
    else return true;
  }

  SaveAndExit(
    form: HouseholdMember,
    isFormValid: boolean,
    isFormDirty: boolean
  ) {
    this.isValid = isFormValid;
    this.isDirty = isFormDirty;
    this.errorMsg = this.memberService.ValidationRules(form, isFormValid);
    if (this.errorMsg != '') {
      alert(this.errorMsg);
      return this.route.navigate(['create']);
    } else {
      this.memberService.setSavedMember(form);
      this.memberService.resetMemberId();
      return this.route.navigate(['confirm']);
    }
  }

  AddMember(form: HouseholdMember, isFormValid: boolean, isFormDirty: boolean) {
    this.isValid = isFormValid;
    this.isDirty = isFormDirty;
    if (form.memberId == 1) {
      this.firstMember = form;
    }
    this.errorMsg = this.memberService.ValidationRules(form, isFormValid);
    if (
      form.memberId > 1 &&
      this.firstMember.dateOfBirth.toString() > form.dateOfBirth.toString()
    ) {
      this.errorMsg += 'Family members must be younger than the first member.\n';
    }
    if (this.memberService.getMemberId() > 5) {
      this.errorMsg +=
        'Family cannot have more than 5 members. Please save and exit.';
    }
    if (this.errorMsg != '') {
      alert(this.errorMsg);
      return this.route.navigate(['create']);
    } else {
      this.memberService
        .addMember(this.memberService.getSavedMember())
        .subscribe((data) => {
          this.msg = data;
        });
      alert('Member added successfully');
      this.memberService.setMemberId();
      return this.route.navigate(['create']);
    }
  }
}
