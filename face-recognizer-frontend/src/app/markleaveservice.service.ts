import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkleaveserviceService {

  private apiUrl = 'http://localhost:5000/request'; // Update with your Flask API URL

  constructor(private http: HttpClient) {}

  addRequest(requestData: any): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post<any>(this.apiUrl,requestData);


}
}
