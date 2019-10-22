import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadNotifyService {
  private readonly subject = new Subject<any>();

  public get requestLoad$(): Observable<any> {
    return this.subject.asObservable();
  }

  public notify(): void {
    this.subject.next();
  }
}
