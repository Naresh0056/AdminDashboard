import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./shared-module/sidebar/sidebar.component";
import { LoginComponent } from "./auth/login/login.component";
=======
>>>>>>> b04f5cc8370095517a8e2b01e4e647d07acf8c89

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./shared-module/sidebar/sidebar.component";
import { LoginComponent } from "./auth/login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent
  ],
<<<<<<< HEAD
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
=======
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
>>>>>>> b04f5cc8370095517a8e2b01e4e647d07acf8c89
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
