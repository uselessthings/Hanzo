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
        }, 5000);
      }, 5000);
    }, 5000);
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
          this.spinner3 = !this.spinner3;
          this.done = true;
        }, 5000);
      }, 5000);
    }, 5000);
  }

  reset() {
    this.result = false;
    this.done = false;
  }

}
