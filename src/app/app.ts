import { AfterViewInit, ChangeDetectorRef, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
// export class App implements AfterViewInit{
//   // protected readonly title = signal('first-ng-app');
//   // protected readonly name = 'Johao';
//   ngAfterViewInit(): void {
//     console.log('Han sido inicializadas las vistas de este componente y sus hijos');
//   }
// }

// export class App {
//     isDestroyed: boolean = false;
//     countDown: number;
//     intervalId: any;

//     constructor(private cdr: ChangeDetectorRef) {
//         this.countDown = 10;
//         this.intervalId = setInterval(() => {
//           this.countDown--;
//           if (this.countDown === 0) {
//             this.isDestroyed = true;
//             clearInterval(this.intervalId);
//           }
//           this.cdr.markForCheck();
//         }, 1000);
//     }
// }

export class App {
  
}