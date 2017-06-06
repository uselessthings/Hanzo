import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = false;
  done = false;
  color = "accent";

  spin = false;
  spinner1 = false;
  spinner2 = false;
  spinner3 = false;

  loadDelay = 5000;
  msgDelay = 4000;

  calculate() {
    this.spin = true;
    this.spinner1 = !this.spinner1;
    setTimeout(() => {
      this.color = "primary";
      this.spinner1 = !this.spinner1;
      this.spinner2 = !this.spinner2;
      setTimeout(() => {
        this.color = "warn";
        this.spinner2 = !this.spinner2;
        this.spinner3 = !this.spinner3;
        setTimeout(() => {
          this.spinner3 = !this.spinner3;
          this.spin = false;
          this.color = "accent";
          this.result = !this.result;
          this.msg();
        }, this.loadDelay);
      }, this.loadDelay);
    }, this.loadDelay);
  }

  msg() {
    this.spinner1 = !this.spinner1;
    setTimeout(() => {
      this.spinner1 = !this.spinner1;
      this.spinner2 = !this.spinner2;
      setTimeout(() => {
        this.spinner2 = !this.spinner2;
        this.spinner3 = !this.spinner3;
        setTimeout(() => {
          this.done = true;
        }, this.msgDelay);
      }, this.msgDelay);
    }, this.msgDelay);
  }

  reset() {
    this.spinner1 = false;
    this.spinner2 = false;
    this.spinner3 = false;
    this.result = false;
    this.done = false;
  }

}
