import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-addTask',
    templateUrl: './add.component.html',
    styleUrl: './add.component.css',
    standalone: false
})
export class AddComponent implements OnInit {
    constructor() {
        console.log('Desde el constructor');
    }

    ngOnInit(): void {
        // Initialization logic here
        console.log('Desde el ngOnInit');
    }
}