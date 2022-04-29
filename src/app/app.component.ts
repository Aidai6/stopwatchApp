import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'stopwatch';
  subtitle: string = 'Stopwatch built on Angular';
  minutes = 0
  seconds = 0;
  tens = 0;
  timerID = 0;

  onStartTimer() {
    this.timerID = setInterval(() => {
      this.tens++;
      if (this.tens >= 100) {
        this.seconds++;
        this.tens = 0;
      }
      if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0
      }
    });
  }
  onStopTimer() {
    clearInterval(this.timerID);
  }
  onResetTimer() {
    clearInterval(this.timerID);
    this.minutes = 0;
    this.seconds = 0;
    this.tens = 0;
  }
  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}






