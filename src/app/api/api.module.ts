/* tslint:disable */
import { NgModule, Provider, forwardRef, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { InitService } from './init.service';
import { StoreService } from "../store.service";
import { FlightOffersService } from './services/flight-offers.service';
import { ApiInterceptor } from "./api.interceptor";

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

export function initializeApi(apiInitService: InitService) {
  return (): Promise<any> => {
    return apiInitService.Init().then((res: any) => {
      //TODO: store in @ngrx/store
      StoreService.token = res.access_token;
    });
  };
}
/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApi,
      deps: [InitService],
      multi: true
    },
    FlightOffersService
  ],
})
export class ApiModule { }
