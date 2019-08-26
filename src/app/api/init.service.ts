import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiConfiguration } from './api-configuration';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class InitService {
  constructor(protected config: ApiConfiguration, private http: HttpClient) {}

  Init() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    const body = `client_id=${environment.client_id}&client_secret=${
      environment.client_secret
    }&grant_type=client_credentials`;
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.config.tokenUrl}`;
      this.http
        .post(apiURL, body, httpOptions)
        .toPromise()
        .then(
          res => {
            // Success
            resolve(res);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
