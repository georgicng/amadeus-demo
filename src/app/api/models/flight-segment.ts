/* tslint:disable */
import { FlightEndPoint } from './flight-end-point';
import { AircraftEquipment } from './aircraft-equipment';
import { OperatingFlight } from './operating-flight';
import { FlightStop } from './flight-stop';

/**
 * defining a flight segment; including both operating and marketing details when applicable
 */
export interface FlightSegment {
  departure?: FlightEndPoint;
  arrival?: FlightEndPoint;

  /**
   * providing the airline / carrier code
   */
  carrierCode?: string;

  /**
   * the flight number as assigned by the carrier
   */
  number?: string;
  aircraft?: AircraftEquipment;
  operating?: OperatingFlight;

  /**
   * stop duration in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) PnYnMnDTnHnMnS format, e.g. PT2H10M
   */
  duration?: string;

  /**
   * information regarding the different stops composing the flight segment. E.g. technical stop, change of gauge...
   */
  stops?: Array<FlightStop>;
}
