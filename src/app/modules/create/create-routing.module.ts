import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../../components/addTask/add.component';

const routes: Routes = [
    {
        path: '',
        component: AddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRoutingModule { }
