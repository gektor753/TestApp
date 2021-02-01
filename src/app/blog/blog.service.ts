import { Injectable } from '@angular/core';
import { Record } from '../core/types';


@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private array: Array<Record> = [...new Array(10)].map((x, i) => ({id: i, content: i.toString(), title: i.toString()}));

  constructor() { }

  saveNewRecord(record: Record){
    this.array.push(record);
    record.id = this.array.indexOf(record) + 1
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
  getIt(){
    console.log(this.array[0])
  }
  deleteEditedRecord(id:number){
    this.array = this.array.filter((x) => {
      return id !== x.id
    })
  }
  getArray(): Record[] {
    console.log(this.array.slice());
    return this.array.slice();
  }
  saveEditedRecord(record: Record){
    let item = this.array.find((x) =>{

      return record.id === x.id
    } )
    if (!item) {
      return;
    }
    item.title = record.title
    item.content = record.content
  }


  /*getNewId(): number {
    return this.array.map(x => x.id).reduce((a, b) => a < b ? a : b) + 1;
  }*/
}


