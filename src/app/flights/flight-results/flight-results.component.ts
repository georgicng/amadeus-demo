import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { HelperService } from "../helper.service";
import { FlightOffers } from '../../api/models';
import { Store, select } from '@ngrx/store';
import * as fromFlight from '../state/flight.reducer';
import * as flightAction from '../state/flight.actions';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: "app-flight-results",
  templateUrl: "./flight-results.component.html",
  styleUrls: ["./flight-results.component.scss"]
})
export class FlightResultsComponent implements OnInit {
  errorMessage$: Observable<string>;
  query = null;
  loading = true;
  error = false;
  flightOffers: FlightOffers = {};
  componentActive = true;

  constructor(private helper: HelperService, private store: Store<fromFlight.State>) {
  }

  ngOnInit() {
     // Do NOT subscribe here because it used an async pipe

     this.store.pipe(select(fromFlight.getQuery),takeWhile(() => this.componentActive)).subscribe(
      query => { 
        this.query = query; 
        this.store.dispatch(new flightAction.LoadOffers(this.query));
      }
    );

    this.store.pipe(select(fromFlight.getLoading),takeWhile(() => this.componentActive)).subscribe(
      loading => this.loading = loading
    );

    this.errorMessage$ = this.store.pipe(select(fromFlight.getError));

    this.store.pipe(select(fromFlight.getFlightOffers),takeWhile(() => this.componentActive)).subscribe(
      offers => this.flightOffers = offers
    );


  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
