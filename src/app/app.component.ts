import {Component, OnInit} from '@angular/core';
import { BlogService } from './blog/blog.service';
import { EasterEggService } from './easter-egg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isGifVisible = false
  constructor(public blogService: BlogService, public easterEggService: EasterEggService) {
  }

  ngOnInit() {
    this.blogService.initialize()
    this.showGif()
  }
  showGif(){
    this.easterEggService.visibilitySubject.subscribe((value) => {
      this.isGifVisible = value
    })
  }
  gifClose(){
    this.easterEggService.visibilitySubject.next(false)
  }

}
