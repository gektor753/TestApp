import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent} from './pages/blog-page/blog-page.component';
import {EditBlogPageComponent} from './pages/edit-blog-page/edit-blog-page.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: BlogPageComponent},
  {path: `edit/:id`, component: EditBlogPageComponent},
  {path: `new`, component: EditBlogPageComponent, data: {isNew: true}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {

}
