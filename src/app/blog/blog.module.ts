import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { EditBlogPageComponent } from './pages/edit-blog-page/edit-blog-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import {FormsModule} from '@angular/forms';
import { BlogListComponent } from './pages/blog-page/blog-list/blog-list.component';
import { BlogItemComponent } from './pages/blog-page/blog-item/blog-item.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [EditBlogPageComponent, BlogPageComponent, BlogListComponent, BlogItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
 })
export class BlogModule { }
