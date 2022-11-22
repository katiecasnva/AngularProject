import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { CreateActivateGuard } from './create-activate.guard';
import { CreateDeactivateGuard } from './create-deactivate.guard';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { HttpMemberServiceService } from './http-member-service.service';
import { SearchComponent } from './search/search.component';

const routes: Routes = 
[
  {path:"home",component:HomeComponent},
  {path:"create",component:CreateComponent, canActivate:[CreateActivateGuard], canDeactivate:[CreateDeactivateGuard]},
  {path:"search",component:SearchComponent},
  {path:"confirm",component:ConfirmComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
