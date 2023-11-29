import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { allProperties } from '../models/allProperties';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {
  private url : string = "https://localhost:7202/api/Property/ShowAllPropertiesData";
  public data : allProperties[] = [];
  constructor(private http: HttpClient) { }

  postBlog() : Observable<allProperties[]> {
    
    console.log("the url is: " + this.url);
    return this.http.get<allProperties[]>(this.url).pipe(
      map(response => response.map(allPropertiess => new allProperties(allPropertiess.busStopDuration, allPropertiess.dishwasher, allPropertiess.dryer,
        allPropertiess.garrage, allPropertiess.microwave, allPropertiess.name, allPropertiess.oven, allPropertiess.phone, allPropertiess.propertyAddress, allPropertiess.propertyId,
        allPropertiess.propertyName, allPropertiess.refrigerator, allPropertiess.userId, allPropertiess.washer)
    )));
  }
}
