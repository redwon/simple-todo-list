import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input('todo') todo;
  @Output() onRemove = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem()
  {
    this.onRemove.emit(this.todo);
  }

  toggleItem() {
    this.todo.done = !this.todo.done;
    this.onChange.emit(this.todo);
  }

  updateItem(taskName) {
    this.todo.name = taskName;
    this.onChange.emit(this.todo);
  }
}
