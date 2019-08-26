/* tslint:disable */
import { FlightOffer } from './flight-offer';
import { Dictionaries } from './dictionaries';
import { Meta } from './meta';
import { Issue } from './issue';
export interface FlightOffers {
  data?: Array<FlightOffer>;
  dictionaries?: Dictionaries;
  meta?: Meta;
  warnings?: Array<Issue>;
}
