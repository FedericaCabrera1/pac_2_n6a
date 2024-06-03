import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail-component.component.html',
  styleUrls: ['./todo-detail-component.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: any;

  constructor(private todosService: TodosService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const todoId = this.route.snapshot.params['id'];
    this.todosService.getTodoById(todoId).subscribe(todo => {
      this.todo = todo;
    });
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
