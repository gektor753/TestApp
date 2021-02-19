import { Injectable } from '@angular/core';
import { Record } from '../core/types';
import { LocalStorageService } from './local-storage.service';
import { EasterEggService } from '../easter-egg.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private array: Array<Record> = [];

  constructor(public localStorageService: LocalStorageService, public easterEggService: EasterEggService) {
  }

  saveNewRecord(record: Record) {
    const length = this.array.length;
    this.array.push(record);
    const last = this.array[length - 1];
    record.id = length > 0 ? (this.array[length - 1].id as number) + 1 : 1;
    this.localStorageService.saveRecords(this.array);
    this.isVisible(record.title);
  }

  getRecord(id: number): Record | undefined {
    const item = this.array.find((x) => {
      return id === x.id;
    });
    if (item) {
      return {...item};
    }
    return undefined;
  }

  deleteEditedRecord(id: number) {
    this.array = this.array.filter((x) => {
      return id !== x.id;
    });
    this.localStorageService.saveRecords(this.array);
  }

  getArray(): Record[] {
    return this.array.slice();
  }

  saveEditedRecord(record: Record) {
    const item = this.array.find((x) => {
      return record.id === x.id;
    });
    if (!item) {
      return;
    }
    item.title = record.title;
    item.content = record.content;
    this.localStorageService.saveRecords(this.array);
    }

  initialize() {
    if (this.localStorageService.getRecords()) {
      console.log(this.localStorageService.getRecords());
      return this.array = this.localStorageService.getRecords();
    } else {
      return this.array;
    }
  }
  isVisible(title: string){
    if (title === '777'){
      this.easterEggService.visibilitySubject.next(true);
    }
  }
}



