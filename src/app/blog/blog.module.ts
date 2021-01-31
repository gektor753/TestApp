import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { EditBlogPageComponent } from './pages/edit-blog-page/edit-blog-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

import {FormsModule} from '@angular/forms';
import { BlogListComponent } from './pages/blog-page/blog-list/blog-list.component';
import { BlogItemComponent } from './pages/blog-page/blog-item/blog-item.component';

@NgModule({
  declarations: [EditBlogPageComponent, BlogPageComponent, BlogListComponent, BlogItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ]
})
export class BlogModule { }
