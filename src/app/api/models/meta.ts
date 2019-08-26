/* tslint:disable */
import { Links } from './links';
import { Defaults } from './defaults';
export interface Meta {
  links?: Links;

  /**
   * the currency in which the prices of the flight offers are returned. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
   */
  currency?: string;
  defaults?: Defaults;
}
