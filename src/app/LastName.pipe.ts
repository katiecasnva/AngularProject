import { Pipe, PipeTransform } from "@angular/core";
import { HouseholdMember } from './HouseholdMember';

@Pipe({
    name:'LastNamePipe'
})
export class LastNamePipe implements PipeTransform
{
    transform(member:HouseholdMember[], lastName:string) {
        if (lastName == "") return member;
        return member.filter((res)=>res.lastName.toLowerCase().indexOf(lastName.toLowerCase()) !== -1);
    }
}