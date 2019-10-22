import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadNotifyService } from './services/load-notify.service';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  private reloadRequestCount = 0;

  title = 'pull-to-refresh';
  reloadRequestCount$ = new BehaviorSubject<number>(this.reloadRequestCount);

  constructor(private loadNotifyService: LoadNotifyService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.loadNotifyService.requestLoad$.subscribe(() => {
        this.reloadRequestCount$.next(++this.reloadRequestCount);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
