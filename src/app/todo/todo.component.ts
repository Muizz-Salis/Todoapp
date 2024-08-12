import { CommonModule } from '@angular/common';
import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})


export class TodoComponent {
  todoItems: { title: string; todo: string }[] = [];
  newTitle: string = '';
  newTodo: string = '';
  addTodo() {
    if (this.newTitle && this.newTodo) {
      this.todoItems.push({ title: this.newTitle, todo: this.newTodo });
      this.newTitle = '';
      this.newTodo = '';
    }
  }


}

