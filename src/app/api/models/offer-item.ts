/* tslint:disable */
import { Service } from './service';
import { Price } from './price';
export interface OfferItem {
  services?: Array<Service>;
  price?: Price;
  pricePerAdult?: Price;
  pricePerInfant?: Price;
  pricePerChild?: Price;
  pricePerSenior?: Price;
}
