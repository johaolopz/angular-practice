import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-deleted-tasks',
    standalone: false,
    templateUrl: './deleted-tasks.html',
    styleUrl: './deleted-tasks.css'
})
export class DeletedTasks implements OnInit {
    tasks: Task[] = [];

    constructor(private tasksService: TasksService, private router: Router) { }

    ngOnInit(): void {
        this.tasks = this.tasksService.getDeletedTasks();
    }

    restoreTask(id: number): void {
        this.tasksService.restoreTask(id);
        this.tasks = this.tasksService.getDeletedTasks();
    }

    goBack(): void {
        this.router.navigate(['/tasks']);
    }
}
