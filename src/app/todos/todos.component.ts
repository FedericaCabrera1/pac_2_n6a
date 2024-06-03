import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: any[] = [];
  filteredTodos: any[] = [];
  searchText: string = '';
  showSearchButton: boolean = false;

  constructor(private todosService: TodosService, private router: Router) {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.filteredTodos = todos;
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/todos', id]);
  }

  updateSearchButtonVisibility() {
    this.showSearchButton = this.searchText.trim().length > 0;
  }

  searchTodos() {
    this.filteredTodos = this.todos.filter(todo =>
      todo.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
