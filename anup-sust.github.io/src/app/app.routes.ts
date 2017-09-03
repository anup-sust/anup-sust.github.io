import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import {HowHttpsWorksComponent} from './article-list/articles/how-https-works/how-https-works.component';


const routes: Routes = [
  // Root
  {
    component: ArticleListComponent,
    path: ''
  },
  {
    component: ArticleListComponent,
    path: 'articles'
  },
  {
    component: HowHttpsWorksComponent,
    path: 'articles/conceptual/how-https-works'
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
