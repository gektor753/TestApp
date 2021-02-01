import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {


  }

}
