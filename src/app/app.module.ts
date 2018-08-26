import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostSectionComponent } from './post-section/post-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
