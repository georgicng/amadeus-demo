import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import {NgForm} from '@angular/forms';
import { HelperService } from "../helper.service";
import { FlightOffersService } from "../../api/services/flight-offers.service";
import * as fromFlight from '../state/flight.reducer';
import * as flightAction from '../state/flight.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: "app-flight-search",
  templateUrl: "./flight-search.component.html",
  styleUrls: ["./flight-search.component.scss"]
})
export class FlightSearchComponent implements OnInit {
  flight: FlightOffersService.GetFlightOffersParams;
  componentActive = true;

  constructor(private helper: HelperService, private store: Store<fromFlight.State>) {
  }

  ngOnInit() {
    this.store.pipe(select(fromFlight.getQuery),takeWhile(() => this.componentActive)).subscribe(
      query => this.flight = query
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  getAirport(param) {
    return this.helper.getAirport(param);
  }

  adjustValue(increment, counter) {
    switch (counter) {
      case "adults":
        if (this.flight.adults <= 0 && increment == -1) {
        } else {
          this.flight.adults = this.flight.adults + increment;
        }
        break;

      case "children":
        if (this.flight.children <= 0 && increment == -1) {
        } else {
          this.flight.children = this.flight.children + increment;
        }
        break;

      case "infants":
        if (this.flight.infants <= 0 && increment == -1) {
        } else {
          this.flight.infants = this.flight.infants + increment;
        }
        break;
    }
  }

  submit(flight) {
    this.store.dispatch(new flightAction.SearchOffers(flight));
  }
}
