import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DetailsCardsComponent } from './post-section/details-cards/details-cards.component';
import { LeftPanelComponent } from './post-section/left-panel/left-panel.component';
import { PostCardsComponent } from './post-section/post-cards/post-cards.component';

import { RedditApiServiceService } from './shared/services/reddit-api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PostSectionComponent,
    HeaderComponent,
    DetailsCardsComponent,
    LeftPanelComponent,
    PostCardsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Angular2FontawesomeModule
  ],
  providers: [RedditApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
