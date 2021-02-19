import { Component, OnInit } from '@angular/core';
import { Record } from '../../../core/types';
import { BlogService } from '../../blog.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-blog-page',
  templateUrl: './edit-blog-page.component.html',
  styleUrls: ['./edit-blog-page.component.scss']
})
export class EditBlogPageComponent implements OnInit {
  public record: Record = {
    title: '',
    content: '',
  };
  public isNew = false;
  public id: number = 1;
  public notFound = false;
  navigation(){ this.router.navigate(['/blogs/list']).then()}
  saveButton(){
    if(!this.record.id){
      this.blogService.saveNewRecord(this.record)
      this.navigation()
    }
    else{
      this.blogService.saveEditedRecord(this.record)
      this.navigation()
    }
  }
  deleteButton() {
    if (window.confirm('Вы действительно хотите удалить эту запись?')) {
      if (!this.record.id) {
        this.navigation()
      } else {
        this.blogService.deleteEditedRecord(this.record.id)
        this.navigation()
      }
    }
  }
  constructor(public blogService: BlogService, private activatedRoute: ActivatedRoute, public router: Router) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (!data.isNew) {
        this.activatedRoute.params.subscribe(params => {
          this.id = Number(params['id']);
          const currentRecord = this.blogService.getRecord(this.id);
          if (currentRecord) {
            this.record = currentRecord;
          }
          else{
            this.notFound = true
          }
        })
      }
      else{
        this.isNew  = true;
      }
    })
  }
}




