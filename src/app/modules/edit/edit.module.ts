import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { TaskEdit } from '../../components/task-edit/task-edit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TaskEdit
    ],
    imports: [
        CommonModule,
        EditRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EditModule { }
