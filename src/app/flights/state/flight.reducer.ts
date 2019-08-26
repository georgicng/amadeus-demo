import { FlightOffer, FlightOffers } from 'src/app/api/models';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightActions, FlightActionTypes } from './flight.actions';
import { FlightOffersService } from 'src/app/api/services';
let moment = require('moment');

export interface State extends fromRoot.State {
    flights: FlightState
}

export interface FlightState {
    query: FlightOffersService.GetFlightOffersParams,
    offers: FlightOffers,
    currentOffer: FlightOffer,
    error: string,
    loading: boolean,
}

const initialState: FlightState = {
    query: {
        origin: "LOS",
        destination: "NYC",
        departureDate: moment(new Date()).format('YYYY-MM-DD'),
        travelClass: "ECONOMY",
        adults: 1,
        children: 0,
        infants: 0,
        max: 10,
        nonStop: false,
    },
    offers: {},
    currentOffer: null,
    error: '',
    loading: false
}

const getFlightFeatureState = createFeatureSelector<FlightState>('flights');

export const getQuery = createSelector(
    getFlightFeatureState,
    state => state.query
);

export const getFlightOffers = createSelector(
    getFlightFeatureState,
    state => state.offers
);

export const getOffers = createSelector(
    getFlightFeatureState,
    state => state.offers.data
);

export const getFlightOffersDictionary = createSelector(
    getFlightFeatureState,
    state => state.offers.dictionaries
);

/*
TODO: use id for currentoffer instead of object
export const getCurrentOfferID = createSelector(
    getFlightFeatureState,
    state => state.currentOfferID
);
export const getCurrentOffer = createSelector(
    getFlightFeatureState,
    getCurrentOfferID,
    (state, getCurrentOfferID) => state.find(item => item.id == getCurrentOfferID)
);
*/
export const getCurrentOffer = createSelector(
    getFlightFeatureState,
    state => state.currentOffer
);

export const getError = createSelector(
    getFlightFeatureState,
    state => state.error
);

export const getLoading = createSelector(
    getFlightFeatureState,
    state => state.loading
);

export function reducer(state = initialState, action: FlightActions): FlightState {
    switch (action.type) {
        case FlightActionTypes.SearchOffers:
            return {
                ...state,
                query: action.payload,
                offers: {}
            }
        case FlightActionTypes.LoadOffers:
            return {
                ...state,
                loading: true
            }
        case FlightActionTypes.LoadSuccess:
            return {
                ...state,
                offers: action.payload,
                error: '',
                loading: false
            }
        case FlightActionTypes.LoadFail:
            return {
                ...state,
                offers: {},
                error: action.payload,
                loading: false
            }
        case FlightActionTypes.SelectOffer:
            return {
                ...state,
                currentOffer: action.payload
            }
        default:
            return state;
    }
}