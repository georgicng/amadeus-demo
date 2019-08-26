import { Injectable } from "@angular/core";
import { FlightOffersService } from "../api/services/flight-offers.service";
//import { FlightOffers } from '../api/models';

@Injectable({
  providedIn: "root"
})
export class FlightService {
  constructor(private _offers: FlightOffersService) {}

  getFlights(query) {
    return this._offers.getFlightOffers(query);
  }
}
