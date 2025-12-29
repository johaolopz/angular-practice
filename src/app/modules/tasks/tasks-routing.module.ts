import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTask } from '../../components/list-task/list-task';
import { CompletedTasks } from '../../components/completed-tasks/completed-tasks';
import { DeletedTasks } from '../../components/deleted-tasks/deleted-tasks';
import { TaskDetails } from '../../components/task-details/task-details';

const routes: Routes = [
    {
        path: '',
        component: ListTask,
        pathMatch: 'full'
    },
    {
        path: 'completed',
        component: CompletedTasks,
    },
    {
        path: 'deleted',
        component: DeletedTasks,
    },
    {
        path: 'details/:id',
        component: TaskDetails,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
