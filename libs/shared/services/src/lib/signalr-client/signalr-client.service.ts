import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr'
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SignalrClientService {

  constructor() { }

  private _recievedMessageSubject = new Subject<any>()

  public get receivedMessage$(): Observable<any> {
    return this._recievedMessageSubject;
  }

  private connection: signalR.HubConnection

  public connect(url: string) {
    return new Promise<any>((res, reject) => {
      try {
        if (this.connection) {
          console.log("SignalR connection already started")
          reject();
        }

        this.connection = new signalR.HubConnectionBuilder()
          .withUrl(url || "/chatHub")
          .configureLogging(signalR.LogLevel.Information)
          .build();

        this.connection.start().then(() => {
          console.log("connected");
          res();
        });
      } catch (error) {
        console.error(error)
        reject(error)
      }
    })
  }

  public registerMethodListener(methodName: string) {
    if (!this.connection) {
      console.warn("Please start the connection first")
      return;
    }

    this.connection.off(methodName);

    this.connection.on(methodName, (message) => {
      console.log(`Message received: ${JSON.stringify(message)}`);
      this._recievedMessageSubject.next(message);
    })
  }

}
