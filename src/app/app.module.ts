import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AppRouter} from './routes'
import {AuthService} from './auth.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './addclient/addclient.component';
import { BookComponent } from './book/book.component';
import { WorkspaceComponent } from './workspace/workspace.component';   

@NgModule({
    declarations: [AppComponent, DashboardComponent, LoginComponent,AddclientComponent, BookComponent, WorkspaceComponent],
    imports: [BrowserModule, HttpModule, RouterModule, FormsModule, AppRouter,ReactiveFormsModule],
    providers:[AuthService],
    bootstrap: [AppComponent],
    
})

export class AppModule { }
