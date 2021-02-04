import { Injectable } from '@angular/core';
import { Record } from '../core/types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private array: Array<Record> = [];

  constructor(public localStorageService: LocalStorageService) {
  }

  saveNewRecord(record: Record) {
    this.array.push(record);
    record.id = this.array.indexOf(record) + 1
    this.localStorageService.saveRecords(this.array) //1
  }

  getRecord(id: number): Record | undefined {
    const item = this.array.find((x) => {
      return id === x.id
    });
    if (item) {
      return {...item}
    }
    return undefined;
  }

  deleteEditedRecord(id: number) {
    this.array = this.array.filter((x) => {
      return id !== x.id
    })
    this.localStorageService.saveRecords(this.array) //1.1
  }

  getArray(): Record[] {
    return this.array.slice();
  }

  saveEditedRecord(record: Record) {
    let item = this.array.find((x) => {
      return record.id === x.id
    })
    if (!item) {
      return;
    }
    item.title = record.title
    item.content = record.content
    this.localStorageService.saveRecords(this.array) //3
  }

  initialize() {
    return this.array = this.localStorageService.getRecords();
  }
}



