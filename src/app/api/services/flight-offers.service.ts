/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FlightOffers } from '../models/flight-offers';
@Injectable({
  providedIn: 'root',
})
class FlightOffersService extends __BaseService {
  static readonly getFlightOffersPath = '/shopping/flight-offers';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Search for the best bookable flight offers from a very simple query where you can specify as little as the travel origin, a destination and a departure date.
   *
   * ### Query example
   * What are the best offers for flights from New-York to Madrid the 1st of August 2019?
   * <pre><code>
   * GET https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&max=2
   * </code></pre>
   *
   * ### Response example
   * <pre><code>
   * {
   *     "meta": {
   *         "links": {
   *         "self": "http://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&adults=1&nonStop=false&max=2"
   *         },
   *         "currency": "EUR",
   *         "defaults": {
   *             "nonStop": false,
   *             "adults": 1
   *         }
   *     },
   *     "data": [
   *         {
   *             "type": "flight-offer",
   *             "id": "1539956390004--540268760",
   *             "offerItems": [
   *                 {
   *                     "services": [
   *                         {
   *                             "segments": [
   *                                 {
   *                                     "flightSegment": {
   *                                         "departure": {
   *                                             "iataCode": "EWR",
   *                                             "terminal": "B",
   *                                             "at": "2019-08-01T17:45:00-04:00"
   *                                         },
   *                                         "arrival": {
   *                                             "iataCode": "LIS",
   *                                             "terminal": "1",
   *                                             "at": "2019-08-02T05:35:00+01:00"
   *                                         },
   *                                         "carrierCode": "TP",
   *                                         "number": "202",
   *                                         "aircraft": {
   *                                             "code": "332"
   *                                         },
   *                                         "operating": {
   *                                             "carrierCode": "TP",
   *                                             "number": "202"
   *                                         },
   *                                         "duration": "0DT6H50M"
   *                                     },
   *                                     "pricingDetailPerAdult": {
   *                                         "travelClass": "ECONOMY",
   *                                         "fareClass": "U",
   *                                         "availability": 1,
   *                                         "fareBasis": "UUSDSI0E"
   *                                     }
   *                                 },
   *                                 {
   *                                     "flightSegment": {
   *                                         "departure": {
   *                                             "iataCode": "LIS",
   *                                             "terminal": "1",
   *                                             "at": "2019-08-02T06:55:00+01:00"
   *                                         },
   *                                         "arrival": {
   *                                             "iataCode": "MAD",
   *                                             "terminal": "2",
   *                                             "at": "2019-08-02T09:10:00+02:00"
   *                                         },
   *                                         "carrierCode": "TP",
   *                                         "number": "1026",
   *                                         "aircraft": {
   *                                             "code": "319"
   *                                         },
   *                                         "operating": {
   *                                             "carrierCode": "TP",
   *                                             "number": "1026"
   *                                         },
   *                                         "duration": "0DT1H15M"
   *                                     },
   *                                     "pricingDetailPerAdult": {
   *                                         "travelClass": "ECONOMY",
   *                                         "fareClass": "U",
   *                                         "availability": 5,
   *                                         "fareBasis": "UUSDSI0E"
   *                                     }
   *                                 }
   *                             ]
   *                         }
   *                     ],
   *                     "price": {
   *                         "total": "259.91",
   *                         "totalTaxes": "185.91"
   *                     },
   *                     "pricePerAdult": {
   *                         "total": "259.91",
   *                         "totalTaxes": "185.91"
   *                     }
   *                 }
   *             ]
   *         },
   *         {
   *             "type": "flight-offer",
   *             "id": "1539956390004-765796655",
   *             "offerItems": [
   *                 {
   *                     "services": [
   *                         {
   *                         "segments": [
   *                             {
   *                             "flightSegment": {
   *                                 "departure": {
   *                                 "iataCode": "JFK",
   *                                 "at": "2019-08-01T22:05:00-04:00"
   *                                 },
   *                                 "arrival": {
   *                                 "iataCode": "MAD",
   *                                 "at": "2019-08-02T11:30:00+02:00",
   *                                 "terminal": "1"
   *                                 },
   *                                 "carrierCode": "UX",
   *                                 "number": "92",
   *                                 "aircraft": {
   *                                 "code": "332"
   *                                 },
   *                                 "operating": {
   *                                 "carrierCode": "UX",
   *                                 "number": "92"
   *                                 },
   *                                 "duration": "0DT7H25M"
   *                             },
   *                             "pricingDetailPerAdult": {
   *                                 "travelClass": "ECONOMY",
   *                                 "fareClass": "M",
   *                                 "availability": 9,
   *                                 "fareBasis": "MYYOAE"
   *                             }
   *                             }
   *                         ]
   *                         }
   *                     ],
   *                     "price": {
   *                         "total": "1670.89",
   *                         "totalTaxes": "162.89"
   *                     },
   *                     "pricePerAdult": {
   *                         "total": "1670.89",
   *                         "totalTaxes": "162.89"
   *                     }
   *                 }
   *             ]
   *         }
   *     ],
   *     "dictionaries": {
   *         "locations": {
   *             "JFK": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "JOHN F KENNEDY INTL"
   *             },
   *             "EWR": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "NEWARK LIBERTY INTL"
   *             },
   *             "MAD": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "ADOLFO SUAREZ BARAJAS"
   *             },
   *             "LIS": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "AIRPORT"
   *             }
   *         },
   *         "carriers": {
   *             "UX": "AIR EUROPA",
   *             "TP": "TAP PORTUGAL"
   *         },
   *         "currencies": {
   *             "EUR": "EURO"
   *         },
   *         "aircraft": {
   *             "319": "AIRBUS INDUSTRIE A319",
   *             "332": "AIRBUS INDUSTRIE A330-200"
   *         }
   *     }
   * }
   * </code></pre>
   * @param params The `FlightOffersService.GetFlightOffersParams` containing the following parameters:
   *
   * - `origin`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
   *
   * - `destination`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
   *
   * - `departureDate`: the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
   *
   * - `travelClass`: most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
   *
   * - `seniors`: the number of senior travelers (age 65 or older on date of departure). If specified, this number should be greater than or equal to 0
   *
   * - `returnDate`: the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
   *
   * - `returnBy`: the date and time by which the last flight of the inbound should arrive at the origin. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2017-12-31T12:01
   *
   * - `nonStop`: if set to true, the search will find only flights going from the origin to the destination with no stop in between
   *
   * - `maxPrice`: maximum price of the flight offers to find, in EUR unless some other currency is specified. By default, no limit is applied. If specified, the value should be a positive number with no decimals
   *
   * - `max`: maximum number of flight offers to return.
   *
   *   If specified, the value should be between 1 and 250. When not specified, system uses the default value **50**.
   *
   * - `infants`: the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult or a senior traveler, and thus the number of infants must not exceed the sum of the number of adults and seniors. If specified, this number should be greater than or equal to 0
   *
   * - `includeAirlines`: if specified, the flight offer will include at least one segment per bound marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
   *
   * - `excludeAirlines`: if specified, the flight offer will exclude all the flights marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
   *
   * - `currency`: the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
   *
   * - `children`: the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
   *
   * - `arrivalBy`: the date and time by which the last flight of the outbound should arrive at the destination. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2016-12-31T23:59
   *
   * - `adults`: the number of adult travelers (age 12 or older on date of departure). If specified, this number should be greater than or equal to 0
   *
   * @return Success
   */
  getFlightOffersResponse(params: FlightOffersService.GetFlightOffersParams): __Observable<__StrictHttpResponse<FlightOffers>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.origin != null) __params = __params.set('origin', params.origin.toString());
    if (params.destination != null) __params = __params.set('destination', params.destination.toString());
    if (params.departureDate != null) __params = __params.set('departureDate', params.departureDate.toString());
    if (params.travelClass != null) __params = __params.set('travelClass', params.travelClass.toString());
    if (params.seniors != null) __params = __params.set('seniors', params.seniors.toString());
    if (params.returnDate != null) __params = __params.set('returnDate', params.returnDate.toString());
    if (params.returnBy != null) __params = __params.set('returnBy', params.returnBy.toString());
    if (params.nonStop != null) __params = __params.set('nonStop', params.nonStop.toString());
    if (params.maxPrice != null) __params = __params.set('maxPrice', params.maxPrice.toString());
    if (params.max != null) __params = __params.set('max', params.max.toString());
    if (params.infants != null) __params = __params.set('infants', params.infants.toString());
    if (params.includeAirlines != null) __params = __params.set('includeAirlines', params.includeAirlines.toString());
    if (params.excludeAirlines != null) __params = __params.set('excludeAirlines', params.excludeAirlines.toString());
    if (params.currency != null) __params = __params.set('currency', params.currency.toString());
    if (params.children != null) __params = __params.set('children', params.children.toString());
    if (params.arrivalBy != null) __params = __params.set('arrivalBy', params.arrivalBy.toString());
    if (params.adults != null) __params = __params.set('adults', params.adults.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/shopping/flight-offers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FlightOffers>;
      })
    );
  }
  /**
   * Search for the best bookable flight offers from a very simple query where you can specify as little as the travel origin, a destination and a departure date.
   *
   * ### Query example
   * What are the best offers for flights from New-York to Madrid the 1st of August 2019?
   * <pre><code>
   * GET https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&max=2
   * </code></pre>
   *
   * ### Response example
   * <pre><code>
   * {
   *     "meta": {
   *         "links": {
   *         "self": "http://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&adults=1&nonStop=false&max=2"
   *         },
   *         "currency": "EUR",
   *         "defaults": {
   *             "nonStop": false,
   *             "adults": 1
   *         }
   *     },
   *     "data": [
   *         {
   *             "type": "flight-offer",
   *             "id": "1539956390004--540268760",
   *             "offerItems": [
   *                 {
   *                     "services": [
   *                         {
   *                             "segments": [
   *                                 {
   *                                     "flightSegment": {
   *                                         "departure": {
   *                                             "iataCode": "EWR",
   *                                             "terminal": "B",
   *                                             "at": "2019-08-01T17:45:00-04:00"
   *                                         },
   *                                         "arrival": {
   *                                             "iataCode": "LIS",
   *                                             "terminal": "1",
   *                                             "at": "2019-08-02T05:35:00+01:00"
   *                                         },
   *                                         "carrierCode": "TP",
   *                                         "number": "202",
   *                                         "aircraft": {
   *                                             "code": "332"
   *                                         },
   *                                         "operating": {
   *                                             "carrierCode": "TP",
   *                                             "number": "202"
   *                                         },
   *                                         "duration": "0DT6H50M"
   *                                     },
   *                                     "pricingDetailPerAdult": {
   *                                         "travelClass": "ECONOMY",
   *                                         "fareClass": "U",
   *                                         "availability": 1,
   *                                         "fareBasis": "UUSDSI0E"
   *                                     }
   *                                 },
   *                                 {
   *                                     "flightSegment": {
   *                                         "departure": {
   *                                             "iataCode": "LIS",
   *                                             "terminal": "1",
   *                                             "at": "2019-08-02T06:55:00+01:00"
   *                                         },
   *                                         "arrival": {
   *                                             "iataCode": "MAD",
   *                                             "terminal": "2",
   *                                             "at": "2019-08-02T09:10:00+02:00"
   *                                         },
   *                                         "carrierCode": "TP",
   *                                         "number": "1026",
   *                                         "aircraft": {
   *                                             "code": "319"
   *                                         },
   *                                         "operating": {
   *                                             "carrierCode": "TP",
   *                                             "number": "1026"
   *                                         },
   *                                         "duration": "0DT1H15M"
   *                                     },
   *                                     "pricingDetailPerAdult": {
   *                                         "travelClass": "ECONOMY",
   *                                         "fareClass": "U",
   *                                         "availability": 5,
   *                                         "fareBasis": "UUSDSI0E"
   *                                     }
   *                                 }
   *                             ]
   *                         }
   *                     ],
   *                     "price": {
   *                         "total": "259.91",
   *                         "totalTaxes": "185.91"
   *                     },
   *                     "pricePerAdult": {
   *                         "total": "259.91",
   *                         "totalTaxes": "185.91"
   *                     }
   *                 }
   *             ]
   *         },
   *         {
   *             "type": "flight-offer",
   *             "id": "1539956390004-765796655",
   *             "offerItems": [
   *                 {
   *                     "services": [
   *                         {
   *                         "segments": [
   *                             {
   *                             "flightSegment": {
   *                                 "departure": {
   *                                 "iataCode": "JFK",
   *                                 "at": "2019-08-01T22:05:00-04:00"
   *                                 },
   *                                 "arrival": {
   *                                 "iataCode": "MAD",
   *                                 "at": "2019-08-02T11:30:00+02:00",
   *                                 "terminal": "1"
   *                                 },
   *                                 "carrierCode": "UX",
   *                                 "number": "92",
   *                                 "aircraft": {
   *                                 "code": "332"
   *                                 },
   *                                 "operating": {
   *                                 "carrierCode": "UX",
   *                                 "number": "92"
   *                                 },
   *                                 "duration": "0DT7H25M"
   *                             },
   *                             "pricingDetailPerAdult": {
   *                                 "travelClass": "ECONOMY",
   *                                 "fareClass": "M",
   *                                 "availability": 9,
   *                                 "fareBasis": "MYYOAE"
   *                             }
   *                             }
   *                         ]
   *                         }
   *                     ],
   *                     "price": {
   *                         "total": "1670.89",
   *                         "totalTaxes": "162.89"
   *                     },
   *                     "pricePerAdult": {
   *                         "total": "1670.89",
   *                         "totalTaxes": "162.89"
   *                     }
   *                 }
   *             ]
   *         }
   *     ],
   *     "dictionaries": {
   *         "locations": {
   *             "JFK": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "JOHN F KENNEDY INTL"
   *             },
   *             "EWR": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "NEWARK LIBERTY INTL"
   *             },
   *             "MAD": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "ADOLFO SUAREZ BARAJAS"
   *             },
   *             "LIS": {
   *                 "subType": "AIRPORT",
   *                 "detailedName": "AIRPORT"
   *             }
   *         },
   *         "carriers": {
   *             "UX": "AIR EUROPA",
   *             "TP": "TAP PORTUGAL"
   *         },
   *         "currencies": {
   *             "EUR": "EURO"
   *         },
   *         "aircraft": {
   *             "319": "AIRBUS INDUSTRIE A319",
   *             "332": "AIRBUS INDUSTRIE A330-200"
   *         }
   *     }
   * }
   * </code></pre>
   * @param params The `FlightOffersService.GetFlightOffersParams` containing the following parameters:
   *
   * - `origin`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
   *
   * - `destination`: city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
   *
   * - `departureDate`: the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
   *
   * - `travelClass`: most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
   *
   * - `seniors`: the number of senior travelers (age 65 or older on date of departure). If specified, this number should be greater than or equal to 0
   *
   * - `returnDate`: the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
   *
   * - `returnBy`: the date and time by which the last flight of the inbound should arrive at the origin. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2017-12-31T12:01
   *
   * - `nonStop`: if set to true, the search will find only flights going from the origin to the destination with no stop in between
   *
   * - `maxPrice`: maximum price of the flight offers to find, in EUR unless some other currency is specified. By default, no limit is applied. If specified, the value should be a positive number with no decimals
   *
   * - `max`: maximum number of flight offers to return.
   *
   *   If specified, the value should be between 1 and 250. When not specified, system uses the default value **50**.
   *
   * - `infants`: the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult or a senior traveler, and thus the number of infants must not exceed the sum of the number of adults and seniors. If specified, this number should be greater than or equal to 0
   *
   * - `includeAirlines`: if specified, the flight offer will include at least one segment per bound marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
   *
   * - `excludeAirlines`: if specified, the flight offer will exclude all the flights marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
   *
   * - `currency`: the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
   *
   * - `children`: the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
   *
   * - `arrivalBy`: the date and time by which the last flight of the outbound should arrive at the destination. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2016-12-31T23:59
   *
   * - `adults`: the number of adult travelers (age 12 or older on date of departure). If specified, this number should be greater than or equal to 0
   *
   * @return Success
   */
  getFlightOffers(params: FlightOffersService.GetFlightOffersParams): __Observable<FlightOffers> {
    return this.getFlightOffersResponse(params).pipe(
      __map(_r => _r.body as FlightOffers)
    );
  }
}

module FlightOffersService {

  /**
   * Parameters for getFlightOffers
   */
  export interface GetFlightOffersParams {

    /**
     * city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) from which the traveler will depart, e.g. BOS for Boston
     */
    origin: string;

    /**
     * city/airport [IATA code](http://www.iata.org/publications/Pages/code-search.aspx) to which the traveler is going, e.g. PAR for Paris
     */
    destination: string;

    /**
     * the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2017-12-25
     */
    departureDate: string;

    /**
     * most of the flight time should be spent in a cabin of this quality or higher. The accepted travel class is economy, premium economy, business or first class. If no travel class is specified, the search considers any travel class
     */
    travelClass?: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';

    /**
     * the number of senior travelers (age 65 or older on date of departure). If specified, this number should be greater than or equal to 0
     */
    seniors?: number;

    /**
     * the date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, only one-way itineraries are found. If this parameter is specified, only round-trip itineraries are found. Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-02-28
     */
    returnDate?: string;

    /**
     * the date and time by which the last flight of the inbound should arrive at the origin. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2017-12-31T12:01
     */
    returnBy?: string;

    /**
     * if set to true, the search will find only flights going from the origin to the destination with no stop in between
     */
    nonStop?: boolean;

    /**
     * maximum price of the flight offers to find, in EUR unless some other currency is specified. By default, no limit is applied. If specified, the value should be a positive number with no decimals
     */
    maxPrice?: number;

    /**
     * maximum number of flight offers to return.
     *
     * If specified, the value should be between 1 and 250. When not specified, system uses the default value **50**.
     */
    max?: number;

    /**
     * the number of infant travelers (whose age is less or equal to 2 on date of departure). Infants travel on the lap of an adult or a senior traveler, and thus the number of infants must not exceed the sum of the number of adults and seniors. If specified, this number should be greater than or equal to 0
     */
    infants?: number;

    /**
     * if specified, the flight offer will include at least one segment per bound marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
     */
    includeAirlines?: string;

    /**
     * if specified, the flight offer will exclude all the flights marketed by one of these airlines. Airlines are specified as [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx) and are comma-separated, e.g. 6X,7X,8X
     */
    excludeAirlines?: string;

    /**
     * the preferred currency for the flight offers. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
     */
    currency?: string;

    /**
     * the number of child travelers (older than age 2 and younger than age 12 on date of departure) who will each have their own separate seat. If specified, this number should be greater than or equal to 0
     */
    children?: number;

    /**
     * the date and time by which the last flight of the outbound should arrive at the destination. Datetimes are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm format, e.g. 2016-12-31T23:59
     */
    arrivalBy?: string;

    /**
     * the number of adult travelers (age 12 or older on date of departure). If specified, this number should be greater than or equal to 0
     */
    adults?: number;
  }
}

export { FlightOffersService }
