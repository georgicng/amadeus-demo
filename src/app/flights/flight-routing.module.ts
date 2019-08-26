import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';

const routes: Routes = [
  { path: 'flight', component: FlightSearchComponent },
  { path: 'flight/offers', component: FlightResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
