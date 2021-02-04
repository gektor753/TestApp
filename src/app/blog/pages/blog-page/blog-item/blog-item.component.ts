import {Component, Input} from '@angular/core';
import { Record } from '../../../../core/types';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() item: Record = {
    title: '',
    content: ''
  };
}
