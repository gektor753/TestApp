import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  constructor(public BlockService: BlogService) { }

  ngOnInit(): void {
  }

}
