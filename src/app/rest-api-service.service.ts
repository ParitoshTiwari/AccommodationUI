import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  ////constructor(private http: HttpClient) { }


  postBlog(blog: any){
    let url = "https://localhost:7202/api/Property/ShowAllPropertiesData";
    console.log("the url is: " + url);
    ///return this.http.get(url);
  }
}
