import { Injectable } from "@angular/core";
//import { Moment } from 'moment';
import { StoreService } from '../store.service';
import { Dictionaries, FlightSegment } from '../api/models';

let moment = require('moment');

@Injectable({
  providedIn: "root"
})
export class HelperService {
  constructor() {}

  getTime(datetime) {
    return moment(datetime).format("hh:mm:ss a");
  }

  getDate(datetime) {
    return moment(datetime).format("YY-mm-d");
  }

  getDuration(depature_date, arrival_date) {
    let start = moment(depature_date); //todays date
    let end = moment(arrival_date); // another date
    return moment.duration(end.diff(start)).asHours();
  }

  getAirport(code) {
    //TODO: use @ngrx/store
    let x = StoreService.airports[code.toUpperCase()];
    return x.name;
  }

  getCity(code) {
    //TODO: use @ngrx/store
    return StoreService.airports[code].city;
  }

  getCountry(code) {
    //TODO: use @ngrx/store
    return StoreService.airports[code].country;
  }

  /*  Passed to function:                                                    :::
      lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  
      lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  
      unit = the unit you desire for results                               
         where: 'M' is statute miles (default)                         
          'K' is kilometers                                     
            'N' is nautical miles   */

  getDistance(lat1, lon1, lat2, lon2, unit) {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }

  getMetaValue(dictionary, meta, code) {
    let value = '', key= '';
    switch(meta) {
      case 'locations':
          key = Object.keys(dictionary.locations).find((itemkey) => { return itemkey == code });
          value = key ? dictionary.locations[key].detailedName : '';
      case 'carriers':
          key = Object.keys(dictionary.carriers).find((itemkey) => { return itemkey == code });
          value = key ? dictionary.carriers[key]: '';
      case 'aircraft':
          key = Object.keys(dictionary.aircraft).find((itemkey) => { return itemkey == code });
          value = key ? dictionary.aircraft[key] : '';
    }
    return value;
  }

  samecarrier(segments: FlightSegment[]){
    const carriers = segments.map(item => item.carrierCode);
    return carriers.every( (val, i, arr) => val === arr[0] ); 
  }

  multiFlight(segments: FlightSegment[]){
    return segments.length > 1; 
  }
}
