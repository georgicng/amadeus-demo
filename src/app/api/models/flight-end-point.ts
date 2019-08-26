/* tslint:disable */

/**
 * departure or arrival information
 */
export interface FlightEndPoint {

  /**
   * [IATA airline codes](http://www.iata.org/publications/Pages/code-search.aspx)
   */
  iataCode?: string;

  /**
   * terminal name / number
   */
  terminal?: string;

  /**
   * local date and time in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-ddThh:mm±hh:mm format, e.g. 2017-02-10T20:40:00+02:00
   */
  at?: string;
}
