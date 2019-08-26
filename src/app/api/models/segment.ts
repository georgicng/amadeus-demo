/* tslint:disable */
import { FlightSegment } from './flight-segment';
import { PricingDetail } from './pricing-detail';
export interface Segment {
  flightSegment?: FlightSegment;
  pricingDetailPerAdult?: PricingDetail;
  pricingDetailPerInfant?: PricingDetail;
  pricingDetailPerChild?: PricingDetail;
  pricingDetailPerSenior?: PricingDetail;
}
