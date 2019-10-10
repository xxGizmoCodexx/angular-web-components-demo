import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'nx-demos-test-container-header', //Needed to get around double boostrapping elements issue
  //https://github.com/angular/angular/issues/24397
  templateUrl: './test-container-header.component.html',
  styleUrls: ['./test-container-header.component.scss']
})
export class TestContainerHeaderComponent implements OnInit {

  @Input()
  public title : string

  constructor() { }

  ngOnInit() {
  }

}
