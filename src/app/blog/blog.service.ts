import { Injectable } from '@angular/core';
import { Record } from '../core/types';


@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private array: Array<Record> = [];

  constructor() { }

  addRecord(record: Record){
    this.array.push(record);
    record.id = this.array.indexOf(record) + 1
    console.log(record.id)
  }
  getRecord(id: number){
    return this.array.find((x) => {
      return id === x.id
    })
  }
  getIt(){
    console.log(this.array[0])
  }
  clearRecord(id:number){
    this.array = this.array.filter((x) => {
      return id !== x.id
    })
  }

  /*getNewId(): number {
    return this.array.map(x => x.id).reduce((a, b) => a < b ? a : b) + 1;
  }*/
}


