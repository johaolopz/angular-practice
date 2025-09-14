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

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    })
  }

  sendTaskTitle(): void {
    if (this.form.valid) {
      console.log(this.form.value.title);
    }
  }
}