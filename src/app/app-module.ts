import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddComponent } from './components/addTask/add.component';
import { ListTask } from './components/list-task/list-task';
import { AddTask } from './components/add-task/add-task';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusTaskDirective } from './directives/status-task.directive';
import { ConfirmDeleteDirective } from './directives/confirm-delete.directive';

@NgModule({
  declarations: [
    App,
    AddComponent,
    ListTask,
    AddTask,
    StatusTaskDirective,
    ConfirmDeleteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
