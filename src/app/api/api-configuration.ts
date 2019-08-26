/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://test.api.amadeus.com/v1';
  tokenUrl: string ='https://test.api.amadeus.com/v1/security/oauth2/token';
}
