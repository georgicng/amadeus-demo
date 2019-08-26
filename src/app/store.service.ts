import { Injectable } from "@angular/core";
import { FlightOffersService } from "./api/services/flight-offers.service";
//import * as moment from 'moment';
import Airports from "../assets/data/airports.json";

let moment = require('moment');

//TODO: move features to @ngrx/store
@Injectable({
  providedIn: "root"
})
export class StoreService {
  static airports = Airports;
  static token = '';
  static flightQuery: FlightOffersService.GetFlightOffersParams = {
    origin: "LOS",
    destination: "NYC",
    departureDate:  moment(new Date()).format('YYYY-MM-DD'),
    travelClass: "ECONOMY",
    adults: 1,
    children: 0,
    infants: 0,
    max: 10,
    nonStop: false,
  };
  static hotelQuery = {
    location: "LOS",
    check_in: "2016-12-01",
    check_out: "2016-12-03",
    max_rate: 200,
    apikey: "3eLtLeXfSEWb1Anh2DwLHbk8UtZnJ5gt",
    number_of_results: 10
  };
  static results = [
    {
      itineraries: [
        {
          outbound: {
            flights: [
              {
                departs_at: "2016-11-25T17:55",
                arrives_at: "2016-11-26T05:10",
                origin: {
                  airport: "BOS",
                  terminal: "E"
                },
                destination: {
                  airport: "LHR",
                  terminal: "5"
                },
                marketing_airline: "EI",
                operating_airline: "EI",
                flight_number: "8912",
                aircraft: "744",
                booking_info: {
                  travel_class: "ECONOMY",
                  booking_code: "Y",
                  seats_remaining: 9
                }
              }
            ]
          }
        }
      ],
      fare: {
        total_price: "5201.90",
        price_per_adult: {
          total_fare: "5201.90",
          tax: "27.90"
        },
        restrictions: {
          refundable: true,
          change_penalties: false
        }
      }
    }
  ];
  constructor() {}
}
