import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoutingModule } from './create-routing.module';
import { AddComponent } from '../../components/addTask/add.component';
import { AddTask } from '../../components/add-task/add-task';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AddComponent,
        AddTask
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CreateModule { }
