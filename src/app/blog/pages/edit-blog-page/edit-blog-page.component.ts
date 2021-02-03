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
  public id = 1;
  saveButton(){
    if(!this.record.id){
      this.blogService.saveNewRecord(this.record)
    }
    else{
      this.blogService.saveEditedRecord(this.record)
    }
  }
  deleteButton(){
    if(!this.record.id){
      this.router.navigate(['/list'])
    }
    else {
      this.blogService.deleteEditedRecord(this.record.id)
    }
  }
  constructor(public blogService: BlogService, private activatedRoute: ActivatedRoute, public router: Router) {
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (!data.isNew) {
        this.activatedRoute.params.subscribe(params => {
          this.id = Number(params['id']);
          const currentRecord = this.blogService.getRecord(this.id);
          if (currentRecord) {
            this.record = currentRecord;
          }
        })
      }
      else{
        this.isNew  = true;
      }


    })
  }
}




