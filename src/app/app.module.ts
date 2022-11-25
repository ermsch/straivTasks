import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { SignatureComponent } from './components/signature/signature.component';
import { GradientComponent } from './components/gradient/gradient.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { QueryComponent } from './components/query/query.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SignatureComponent,
    GradientComponent,
    QueryComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
