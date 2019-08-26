import { NgModule } from "@angular/core";
import {StoreModule} from '@ngrx/store';
import { ApiModule } from "../api/api.module";
import { FlightService } from "./flight.service";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightResultsComponent } from "./flight-results/flight-results.component";
import { SharedModule } from '../shared/shared.module';
import { FlightRoutingModule  } from './flight-routing.module';
import { reducer } from './state/flight.reducer';
import { FlightEffects } from './state/flight.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [    
    FlightSearchComponent,
    FlightResultsComponent,
  ],
  imports: [   
    ApiModule,
    FlightRoutingModule,
    SharedModule,
    StoreModule.forFeature('flights', reducer),
    EffectsModule.forFeature([FlightEffects]),
  ],
  providers: [
    FlightService
  ],
})
export class FlightModule { }
