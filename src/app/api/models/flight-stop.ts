/* tslint:disable */
import { AircraftEquipment } from './aircraft-equipment';

/**
 * details of stops for direct or change of gauge flights
 */
export interface FlightStop {

  /**
   * [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
   */
  iataCode?: string;
  newAircraft?: AircraftEquipment;

  /**
   * stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
   */
  duration?: string;

  /**
   * arrival at the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm±hh:mm format, e.g. 2017-02-10T20:40:00+02:00
   */
  arrivalAt?: string;

  /**
   * departure from the stop in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm±hh:mm format, e.g. 2017-02-10T20:40:00+02:00
   */
  departureAt?: string;
}
