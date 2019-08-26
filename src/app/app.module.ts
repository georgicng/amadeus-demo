import { BrowserModule } from "@angular/platform-browser";
import { NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { FlightModule } from './flights/flight.module';
import { AppRoutingModule  } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Amadeus',
      maxAge: 25,
      logOnly: environment.production
    }),
    FlightModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
