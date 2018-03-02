import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes';
import { RouterLink } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SingupComponent } from './components/singup/singup.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SingupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
