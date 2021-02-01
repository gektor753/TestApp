import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../../../blog.service';
import { Record } from '../../../../core/types';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() item: Record = {
    title: '',
    content: ''
  };


  constructor(public BlockService: BlogService) { }

  ngOnInit(): void {

  }
}
