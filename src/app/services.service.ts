import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  GetWorkerData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/33d214b9-ff59-11eb-83b5-c3a784412674');
  }
}
