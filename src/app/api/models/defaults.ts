/* tslint:disable */

/**
 * the query parameters for which default values were used are returned here
 */
export interface Defaults {

  /**
   * search finds only direct flights going from the origin to the destination with no stop
   */
  nonStop?: boolean;

  /**
   * search does the computation for one adult
   */
  adults?: number;
}
