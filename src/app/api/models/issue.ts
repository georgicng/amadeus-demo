/* tslint:disable */
export interface Issue {

  /**
   * the HTTP status code applicable to this error
   */
  status?: number;

  /**
   * an application-specific error code
   */
  code?: number;

  /**
   * a short summary of the error
   */
  title?: string;

  /**
   * explanation of the error
   */
  detail?: string;

  /**
   * an object containing references to the source of the error
   */
  source?: {pointer?: string, parameter?: string, example?: string};
}
