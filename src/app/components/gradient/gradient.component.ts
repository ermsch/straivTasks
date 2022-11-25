import { Component, OnInit } from '@angular/core';
declare const gradient: any
@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss']
})
export class GradientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gradient.initGradient('#gradient-canvas')
  }

}
