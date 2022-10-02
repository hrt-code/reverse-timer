import { Component, OnInit, VERSION } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  timerValue:number=10;
  counter:number=0;
  source$ = interval(1000);
  msgElement:HTMLElement | null;

  ngOnInit(): void {
    this.msgElement=document.getElementById('message');
    this.startTimer();
  }

  startTimer() {

    this.counter=this.timerValue;
    
    const timerSubscription = this.source$.subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        (this.msgElement as HTMLElement).innerHTML = 'Done';
        timerSubscription.unsubscribe();
      }
    });

  }
}