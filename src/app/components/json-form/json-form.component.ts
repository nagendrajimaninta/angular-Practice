import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {
  date: any;
  arr: any[] = []
  sendData() {
    this.arr.push(this.date)
    this.date ="uu5"
  }
}
