import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { routing } from './app.routes';
import { HowHttpsWorksComponent } from './article-list/articles/how-https-works/how-https-works.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HowHttpsWorksComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
