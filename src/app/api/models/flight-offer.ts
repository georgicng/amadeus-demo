/* tslint:disable */
import { OfferItem } from './offer-item';
export interface FlightOffer {

  /**
   * the resource name
   */
  type?: string;

  /**
   * the resource identifier
   */
  id?: string;
  offerItems?: Array<OfferItem>;
}
