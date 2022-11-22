import { Pipe, PipeTransform } from "@angular/core";
import { HouseholdMember } from './HouseholdMember';

@Pipe({
    name: 'DobPipe'
})
export class DobPipe implements PipeTransform {
    transform(member: HouseholdMember[], dob:string) {
        if (dob == null) return member;
        return member.filter((res) => res.dateOfBirth.toString()>dob);
    }
}