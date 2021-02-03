import {Component, OnInit} from '@angular/core';
import { BlogService } from './blog/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public blogService: BlogService) {
  }
  ngOnInit() {
    this.blogService.initialize()
  }
}
