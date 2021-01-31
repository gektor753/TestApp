import { Component, OnInit } from '@angular/core';
import { Record } from '../../../core/types';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-edit-blog-page',
  templateUrl: './edit-blog-page.component.html',
  styleUrls: ['./edit-blog-page.component.scss']
})
export class EditBlogPageComponent implements OnInit {
   record: Record ={
    title:'',
    content:'',

  }
public id = 0;

  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    this.id = 2

  }
}
