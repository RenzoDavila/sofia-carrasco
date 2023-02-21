import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Page } from 'src/app/models/page.model';

const page: Page = {
  page: 'home',
};

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private page$ = new BehaviorSubject<Page>(page);

  constructor() { };

  get selectedPage$(): Observable<Page> {
    return this.page$.asObservable();
  }

  setPage(page: Page): void {
    this.page$.next(page);
  }
}
