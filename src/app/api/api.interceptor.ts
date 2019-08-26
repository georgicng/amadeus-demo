import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { StoreService } from "../store.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Apply the headers
    if (req.url != "https://test.api.amadeus.com/v1/security/oauth2/token") {
      //TODO: store in @ngrx/store
      req = req.clone({
        setHeaders: {
            Authorization: `Bearer ${StoreService.token}`
        }
      });
    }

    // Also handle errors globally
    return next.handle(req).pipe(
      tap(
        x => x,
        err => {
          // Handle this err
          console.error(
            `Error performing request, status code = ${err.status}`
          );
        }
      )
    );
  }
}
