import { Injectable } from '@angular/core';

import {LoggerInterface} from '@nx-demos/shared/abstractions'

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements LoggerInterface {
  public logInfo(message: any): void {
    console.log(message)
  }
  public logWarning(message: any): void {
   console.warn(message)
  }
  public logError(message: any): void {
    console.error(message)
  }

  constructor() { }
}
