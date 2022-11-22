import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseholdMember } from './HouseholdMember';

@Injectable({
  providedIn: 'root',
})
export class HttpMemberServiceService {
  public url = 'http://localhost:3000/householdmembers';

  private savedMember: HouseholdMember = new HouseholdMember();

  private applicationId = 1;

  private memberId = 1;

  msg = '';

  constructor(private http: HttpClient) {}

  //member database
  addMember(member: HouseholdMember): Observable<Object> {
    return this.http.post(this.url, member);
  }
  getMembers(): Observable<HouseholdMember[]> {
    return this.http.get<HouseholdMember[]>(this.url);
  }

  //applicationId getter and setter
  setApplicationId() {
    this.applicationId++;
    this.savedMember.applicationId = this.applicationId;
  }

  getApplicationId() {
    return this.savedMember.applicationId++;
  }

  //memberId getter and setter
  setMemberId() {
    this.memberId++;
    this.savedMember.memberId = this.memberId;
  }

  getMemberId() {
    return this.savedMember.memberId;
  }

  resetMemberId() {
    this.memberId = 1;
    this.savedMember.memberId = this.memberId;
  }

  //savedMember getter and setter
  setSavedMember(member: HouseholdMember) {
    this.savedMember = member;
  }

  getSavedMember() {
    return this.savedMember;
  }


  isAgeMoreThan125(dateOfBirth:Date):boolean {
    var today = new Date().getTime();
    var dob = new Date(dateOfBirth).getTime();
    var timeDiff = Math.abs(today - dob);
    var age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    if(age>125) return true;
    else return false;
  }

  //Form Validation Rules
  ValidationRules(form: HouseholdMember, isFormValid: boolean): string {
    this.msg = '';
    if (!isFormValid) {
      this.msg +=
        'Mandatory fields are required and must be valid; First Name, Last Name, Date of Birth, & Gender.\n';
    }
    if (
      form.firstName.length + form.middleInitial.length + form.lastName.length >
      32
    ) {
      this.msg += 'Your name length is over 32 characters.\n';
    }

    if (this.isAgeMoreThan125(form.dateOfBirth)) {
      this.msg += 'Your age cannot be greater than 125.\n';
    }

    return this.msg;
  }
}
