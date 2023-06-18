import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService implements OnDestroy {
  private queryParams = new Subject<Params>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getQueryParams(): Observable<Params> {
    return this.queryParams.pipe(distinctUntilChanged());
  }

  setQueryParams(queryParams: Params): void {
    const { pathname } = window.location;
    const { snapshot } = this.activatedRoute;

    const params: Params = this.clearParams({
      ...snapshot.queryParams,
      ...queryParams,
    });

    this.router
      .navigate([pathname], { queryParams: params, replaceUrl: true })
      .then(() => {
        this.queryParams.next(params);
      });
  }

  ngOnDestroy(): void {
    this.queryParams.complete();
    this.queryParams.unsubscribe();
  }

  private clearParams = (queryParams: Params) =>
    Object.keys(queryParams).reduce(
      (obj, key): Params =>
        queryParams[key]
          ? {
              ...obj,
              [key]: queryParams[key],
            }
          : obj,
      {} as Params
    );
}
