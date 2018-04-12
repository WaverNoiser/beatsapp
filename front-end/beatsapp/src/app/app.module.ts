import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes';
import { RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SingupComponent } from './components/singup/singup.component';
import { SigninComponent } from './components/signin/signin.component';
import { MessageComponent } from './components/singup/message/message.component';
import { WallpostComponent } from './components/wallpost/wallpost.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SingupComponent,
    SigninComponent,
    MessageComponent,
    WallpostComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
