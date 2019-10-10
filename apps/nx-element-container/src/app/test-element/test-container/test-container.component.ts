import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'nx-demos-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class TestContainerComponent implements OnInit {

  @Input()
  public contentText : string

  @Input()
  public headerText : string

  @Output()
  public itemClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public change(){
    this.contentText = "This should change now"
    this.headerText = "The newest header"
    this.itemClicked.next("You should get this data!");
  }

}
