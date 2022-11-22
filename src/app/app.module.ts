import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpMemberServiceService } from './http-member-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateActivateGuard } from './create-activate.guard';
import { CreateDeactivateGuard } from './create-deactivate.guard';
import { FirstNamePipe } from './FirstName.pipe';
import { LastNamePipe } from './LastName.pipe';
import { AppIdPipe } from './AppId.pipe';
import { DobPipe } from './Dob.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    SearchComponent,
    ConfirmComponent,
    FirstNamePipe,
    LastNamePipe,
    AppIdPipe,
    DobPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpMemberServiceService, CreateActivateGuard, CreateDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
