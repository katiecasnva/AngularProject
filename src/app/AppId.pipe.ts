import { Pipe, PipeTransform } from "@angular/core";
import { HouseholdMember } from './HouseholdMember';

@Pipe({
    name:'AppIdPipe'
})
export class AppIdPipe implements PipeTransform
{
    transform(member:HouseholdMember[], appId:string) {
        // alert(member.length);
        // alert(appId);
        if(appId=="") {
            return member;
        }
        return member.filter((res)=> res.applicationId == parseInt(appId));
    }
}