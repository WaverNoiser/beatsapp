import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes';
import { RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SingupComponent } from './components/singup/singup.component';
import { SigninComponent } from './components/signin/signin.component';
import { MessageComponent } from './components/singup/message/message.component';
import { WallpostComponent } from './components/wallpost/wallpost.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SingupComponent,
    SigninComponent,
    MessageComponent,
    WallpostComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
