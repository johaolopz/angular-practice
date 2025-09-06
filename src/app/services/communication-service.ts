import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Subject privado
  private messageSource = new Subject<string>();

  // Observable público para los que escuchan
  task$ = this.messageSource.asObservable();

  // Método para emitir eventos
  emitEvent(task: string) {
    this.messageSource.next(task);
  }
}