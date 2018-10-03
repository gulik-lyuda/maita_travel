import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  encapsulation : ViewEncapsulation.Native
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
