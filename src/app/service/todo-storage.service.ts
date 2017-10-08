import { Injectable } from '@angular/core';

@Injectable()
export class TodoStorageService {

  constructor() { }

  get() {
    let storage = localStorage.getItem('todoList');
    if(!storage)
      return [];
    return JSON.parse(storage);
  }

  set(todoLists)
  {
    localStorage.setItem('todoList', JSON.stringify(todoLists));
  }
}
