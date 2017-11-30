import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { TodoStorageService } from '../service/todo-storage.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList = [];
  taskName: string;
  options: SortablejsOptions;

  constructor(public storage: TodoStorageService) {
    this.options = {
      animation: 300,
      handle: '.todo-item__drag',
      onUpdate: (event: any) => {
        this.saveItems();
      }
    };
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.todoList = this.storage.get();
  }

  saveItems() {
    this.storage.set(this.todoList);
  }

  addTask() {
    let item = {
      name: this.taskName,
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

  updateItem() {
    this.saveItems();
  }

}
