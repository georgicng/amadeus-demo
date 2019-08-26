/* tslint:disable */
import { TravelClass } from './travel-class';
export interface PricingDetail {
  travelClass?: TravelClass;

  /**
   * class of the fare that applied. Fare classes are subdivisions of travel classes and vary from airline to airline. For instance, Y designs usually a full fare economy class
   */
  fareClass?: string;

  /**
   * the number of seats still available at this time of search with this class of fare
   */
  availability?: number;

  /**
   * the identifier of the fare that applied. Farebasis identifiers vary from airline to airline. It is usually composed of the fare class followed by other alphanumeric codes that identify the rules that apply to the fare. For instance, WH7LNR might mean that the fare class is W, that it is valid during high-season only (H) and for a 7-day advance purchase, long-haul (L) and not refundable (NR)
   */
  fareBasis?: string;
}
