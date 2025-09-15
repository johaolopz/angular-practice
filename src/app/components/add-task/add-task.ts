import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/communication-service';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask implements OnInit {

  constructor(private fb: FormBuilder) { }

  numberTasks: number = 3;
  isActive: boolean = true;
  taskActive!: boolean;
  tasks: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
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
}