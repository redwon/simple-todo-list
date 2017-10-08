import { Component, OnInit } from '@angular/core';
import { TodoStorageService } from '../service/todo-storage.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList = [];

  constructor(public storage: TodoStorageService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.todoList = this.storage.get();
  }

  saveItems() {
    this.storage.set(this.todoList);
  }

  addItem(itemName) {
    let item = {
      name: itemName,
      done: false
    }
    this.todoList.push(item);
    this.saveItems();
  }

  removeItem(item) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveItems();
  }

  toggleItem(item) {
    console.log(item);
    this.saveItems();
  }

}
