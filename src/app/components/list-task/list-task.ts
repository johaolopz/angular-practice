// import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/communication-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.css'
})
export class ListTask implements OnInit, OnDestroy {
  taskList: string[] = [];
  private subscription!: Subscription;

  constructor(
    private eventService: EventService,
    // private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.eventService.task$.subscribe(taskReceived => {
      this.taskList.push(taskReceived);
      // this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}