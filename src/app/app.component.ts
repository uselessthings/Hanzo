import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = false;
  done = false;

  spinner1 = false;
  spinner2 = false;
  spinner3 = false;

  calculate() {
    this.spinner1 = !this.spinner1;
    setTimeout(() => {
      this.spinner1 = !this.spinner1;
      this.spinner2 = !this.spinner2;
      setTimeout(() => {
        this.spinner2 = !this.spinner2;
        this.spinner3 = !this.spinner3;
        setTimeout(() => {
          this.spinner3 = !this.spinner3;
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
