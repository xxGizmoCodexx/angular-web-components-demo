import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'nx-demos-test-container-body',
  templateUrl: './test-container-body.component.html',
  styleUrls: ['./test-container-body.component.scss']
})
export class TestContainerBodyComponent implements OnInit {

  @Input()
  public bodyText : string

  constructor() { }

  ngOnInit() {
  }

  public change(){
    this.bodyText = "This should change now"
  }

}
