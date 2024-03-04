import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from 'ngx-toastr';

import {CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {AuthService} from "./modules/auth/auth.service";
import {HttpInterceptorUtil} from "./utility/http-interceptor.util";

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve: any) => {
      authService.getAdmin().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthService]},
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorUtil, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PathLocationStrategy,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
