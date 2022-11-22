import { Pipe, PipeTransform } from "@angular/core";
import { HouseholdMember } from './HouseholdMember';

@Pipe({
    name:'FirstNamePipe'
})
export class FirstNamePipe implements PipeTransform
{
    transform(member:HouseholdMember[], firstName:string) {
        if(firstName=="") {
            return member;
        }
        return member.filter((res)=>res.firstName.toLowerCase().indexOf(firstName.toLowerCase()) !== -1);
    }
}