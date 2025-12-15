import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) { }

  numberTasks: number = 7;
  isActive: boolean = true;
  taskActive!: boolean;
  tasks: Task[] = [];
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    })
  }

  sendTaskTitle(): void {
    if (this.form.valid && this.form.get('title')?.value !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        title: this.form?.value?.title,
        completed: false
      }
      this.taskAdded.emit(newTask);
      this.form.reset();
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