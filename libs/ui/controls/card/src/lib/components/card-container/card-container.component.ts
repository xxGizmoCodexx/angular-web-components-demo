import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerInterface } from '@nx-demos/shared/abstractions'
import { Subject } from 'rxjs';

interface MockResultInterface {
  results: {
    deviceName: string,
    verions: string,
    realeaseDate: string,
    categories: string[]
  }[]
}

@Component({
  selector: 'nx-demos-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom 
})
export class CardContainerComponent implements OnInit {

  private _logger: LoggerInterface;

  private _injector: Injector

  protected _sendMessageSubject = new Subject();

  @Input()
  public headerText: string

  @Input()
  public contentText: string

  public loading = false;

  @Output()
  public itemClicked = new EventEmitter<string>()

  public deviceResults: {
    deviceName: string,
    verions: string,
    realeaseDate: string,
    categories: string[]
  }[]

  //Needed to expose public methods on element
  // https://angularfirebase.com/lessons/angular-elements-advanced-techniques/
  @Input()
  public changeMode = (mode) => { console.log(`Changing to ${mode} mode`) };

  @Input()
  public sendMessage = () => { return this._sendMessageSubject }

  @Input()
  public changeProp = (prop, value) => { this[prop] = value };

  @Input()
  public registerServices = (logger: LoggerInterface, ...externalServices: any[]) => {
    console.log("Registering component services");
    this._logger = logger;
    this._logger.logInfo("Logger has been logged")
  }

  constructor(
    private httpClient: HttpClient,
  ) {
  }


  ngOnInit() {
    console.log("It's ALIVE!!!!!");
    setInterval(() => {
      console.log("Sending message");
      this._sendMessageSubject.next("Test message coming through!");
    }, 2000)
  }

  public getData_async() {
    //Current build method does not support `async/await` keywords
    // this.httpClient.get<MockResultInterface>("http://www.mocky.io/v2/5d8cb5b12e00005100abdc6f").subscribe(apiData => {
    this.loading = true;
    this.httpClient.get<MockResultInterface>("http://www.mocky.io/v2/5d948cc62f000067008ff7d7").subscribe(apiData => {
      this.deviceResults = apiData.results;
      this.loading = false;
      console.log(apiData);
    })
  }

  public changeText() {
    this.headerText = "Look im dynamic"
    this.itemClicked.next("Getting all the events")
  }

}
