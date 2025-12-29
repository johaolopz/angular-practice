import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEdit } from '../../components/task-edit/task-edit';

const routes: Routes = [
    {
        path: '',
        component: TaskEdit
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditRoutingModule { }
