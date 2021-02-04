import { Injectable } from '@angular/core';
import { Record } from '../core/types';
const records = "records"
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  saveRecords(array: Array<Record>){
      localStorage.setItem(records,JSON.stringify(array))

  }
  getRecords(){
    return JSON.parse(<string> localStorage.getItem(records))
  }
}
