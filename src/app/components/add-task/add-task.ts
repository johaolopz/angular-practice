import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/communication-service';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { title } from 'process';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask implements OnInit {

  constructor(private fb: FormBuilder) { }

  numberTasks: number = 7;
  isActive: boolean = true;
  taskActive!: boolean;
  tasks: Task[] = [
    {
      id: 1,
      title: 'Tarea 1',
      completed: false
    },
    {
      id: 2,
      title: 'Tarea 2',
      completed: false
    },
    {
      id: 3,
      title: 'Tarea 3',
      completed: false
    },
    {
      id: 4,
      title: 'Tarea 4',
      completed: false
    },
    {
      id: 5,
      title: 'Tarea 5',
      completed: false
    },
    {
      id: 6,
      title: 'Tarea 6',
      completed: false
    },
    {
      id: 7,
      title: 'Tarea 7',
      completed: false
    }
  ];
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    })
  }

  sendTaskTitle(): void {
    if (this.form.valid && this.form.get('title')?.value !== '') {
      this.taskActive = false;
      console.log(this.form.value.title);
    } else {
      this.taskActive = true;
    }
  }

  markTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.numberTasks = this.tasks.length;
  }
}