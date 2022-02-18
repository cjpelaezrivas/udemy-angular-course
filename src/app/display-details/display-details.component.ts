import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  showDetails = false;

  logs = [];

  constructor() {}

  ngOnInit(): void {}

  onDisplayDetails() {
    this.toogleShowDetails();
    this.logClick();
  }

  private toogleShowDetails() {
    this.showDetails = !this.showDetails;
  }

  private logClick() {
    this.logs.push(new Date());
    console.log(this.logs);
  }

  isShowDetails() {
    return this.showDetails;
  }
}
