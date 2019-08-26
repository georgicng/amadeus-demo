import { FlightOffer, FlightOffers } from 'src/app/api/models';
import { Action } from '@ngrx/store';
import { FlightOffersService } from 'src/app/api/services';

export enum FlightActionTypes {
    NoAction = '[Flight] Do nothing',
    SearchOffers = '[Flight] Search Flight Offers',
    LoadOffers = '[Flight] Get Flight Offers',
    LoadSuccess = '[Flight] Get Flight Offers Load Success',
    LoadFail = '[Flight] Flight Offers Load Fail',
    SelectOffer = '[Flight] Get Selected Flight Offer'
}

export class NoAction implements Action {
    readonly type = FlightActionTypes.NoAction;
}

export class SearchOffers implements Action {
    readonly type = FlightActionTypes.SearchOffers;
    constructor(public payload: FlightOffersService.GetFlightOffersParams) {}
}

export class LoadOffers implements Action {
    readonly type = FlightActionTypes.LoadOffers;
    constructor(public payload: FlightOffersService.GetFlightOffersParams) {}
}

export class  LoadSuccess implements Action {
    readonly type = FlightActionTypes.LoadSuccess;

    constructor(public payload: FlightOffers) {}
}

export class LoadFail implements Action {
    readonly type = FlightActionTypes.LoadFail;

    constructor(public payload: string) {}
}

export class SelectOffer implements Action {
    readonly type = FlightActionTypes.SelectOffer;

    constructor(public payload: FlightOffer) {}
}

export type FlightActions = SearchOffers | LoadOffers | LoadSuccess | LoadFail | SelectOffer | NoAction;