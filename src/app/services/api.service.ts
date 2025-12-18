import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  APIurl = "https://jsonplaceholder.typicode.com/todos";

  loadTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.APIurl).pipe(
      filter(data => data.length > 0),
      map(data => (data
        .filter(task => !task.completed) // Filtramos tareas incompletas
        .map(task => ({ ...task, title: task.title.toUpperCase() }))) // Formateamos el título a mayúsculas
      ),
      catchError(error => {
        console.error('Error en el llamado del API:', error)
        // Retornamos un array vacío para que la app no se rompa
        return of([])
      })
    );
  }
}
