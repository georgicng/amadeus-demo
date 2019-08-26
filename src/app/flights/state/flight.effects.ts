import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as flightActions from './flight.actions';
import { FlightService } from '../flight.service';
import { FlightOffers } from 'src/app/api/models';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class FlightEffects {
    constructor(private actions$: Actions, private API: FlightService, private router: Router) { }

    @Effect()
    loadFlights$ = this.actions$.pipe(
        ofType(flightActions.FlightActionTypes.LoadOffers),
        mergeMap((action: flightActions.LoadOffers) => this.API.getFlights(action.payload).pipe(
            map((offers: FlightOffers) => (new flightActions.LoadSuccess(offers))),
            catchError(err => of(new flightActions.LoadFail(err)))
        ))
    )

    @Effect({ dispatch: false })
    searchFlights$ = this.actions$.pipe(
        ofType(flightActions.FlightActionTypes.SearchOffers),
        tap(() => this.router.navigateByUrl('/flight/offers'))
    )
}