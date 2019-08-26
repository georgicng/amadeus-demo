/* tslint:disable */

/**
 * quality of service offered in the cabin where the seat is located in this flight. Economy, premium economy, business or first class
 */
type TravelClass =
  'ECONOMY' |
  'PREMIUM_ECONOMY' |
  'BUSINESS' |
  'FIRST';
module TravelClass {
  export const ECONOMY: TravelClass = 'ECONOMY';
  export const PREMIUM_ECONOMY: TravelClass = 'PREMIUM_ECONOMY';
  export const BUSINESS: TravelClass = 'BUSINESS';
  export const FIRST: TravelClass = 'FIRST';
  export function values(): TravelClass[] {
    return [
      ECONOMY,
      PREMIUM_ECONOMY,
      BUSINESS,
      FIRST
    ];
  }
}

export { TravelClass }