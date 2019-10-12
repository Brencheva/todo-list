import { Component, OnInit } from '@angular/core';
import { Todler } from '../../domain/todler';

@Component(
  {
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
}
)
export class TodoListComponent implements OnInit {
  todlers: Todler[] = [];

  newTodler: Todler = new Todler();

  constructor() { }

  ngOnInit() {
    
  }

  addNewTodler = (): void => {
    if (this.newTodler.content) {
      this.todlers.push(this.newTodler);
  
      this.newTodler = new Todler();
    }
  };

  finishTodler = (todler: Todler): void => {
    todler.isDid = true
  };
}
