import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AppRouter} from './routes'
import {AuthService} from './auth.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './addclient/addclient.component';
import { BookComponent } from './book/book.component';   

@NgModule({
    declarations: [AppComponent, DashboardComponent, LoginComponent,AddclientComponent, BookComponent],
    imports: [BrowserModule, HttpModule, RouterModule, FormsModule, AppRouter],
    providers:[AuthService],
    bootstrap: [AppComponent],
    
})

export class AppModule { }
