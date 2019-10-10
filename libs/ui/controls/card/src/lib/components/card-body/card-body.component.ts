import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'nx-demos-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component-copy.css'],
  // encapsulation: ViewEncapsulation.ShadowDom 

})
export class CardBodyComponent implements OnInit {

  @Input()
  public contentText: string;

  @Input()
  public devices: {
    deviceName: string,
    verions: string,
    realeaseDate: string,
    categories: string[]
  }[]

  constructor() { }

  ngOnInit() {
  }

}
