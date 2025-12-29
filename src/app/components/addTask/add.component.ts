import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
    selector: 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl: './add.component.css',
    standalone: false
})
export class AddComponent implements OnInit {
    taskTitle: string = '';
    taskDescription: string = '';

    constructor(
        private tasksService: TasksService,
        private router: Router
    ) {
        console.log('Desde el constructor');
    }

    ngOnInit(): void {
        // Initialization logic here
        console.log('Desde el ngOnInit');
    }

    addTask(): void {
        if (this.taskTitle.trim() && this.taskDescription.trim()) {
            const newTask: Task = {
                id: Date.now(), // Generar ID único basado en timestamp
                title: this.taskTitle,
                description: this.taskDescription,
                completed: false
            };

            this.tasksService.addTask(newTask);
            console.log('Tarea agregada:', newTask);

            // Navegar de vuelta a la lista de tareas
            this.router.navigate(['/tasks']);
        }
    }

    cancel(): void {
        this.router.navigate(['/tasks']);
    }
}