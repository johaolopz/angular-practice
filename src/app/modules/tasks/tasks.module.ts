import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { ListTask } from '../../components/list-task/list-task';
import { CompletedTasks } from '../../components/completed-tasks/completed-tasks';
import { DeletedTasks } from '../../components/deleted-tasks/deleted-tasks';
import { TaskDetails } from '../../components/task-details/task-details';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusTaskDirective } from '../../directives/status-task.directive';
import { ConfirmDeleteDirective } from '../../directives/confirm-delete.directive';

@NgModule({
    declarations: [
        ListTask,
        CompletedTasks,
        DeletedTasks,
        TaskDetails,
        StatusTaskDirective,
        ConfirmDeleteDirective
    ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TasksModule { }
