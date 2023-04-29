import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class patientService {
  private dataUrl = 'assets/patients.json'; // Path to the patients.json file

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
  getSuggestedPatients(): Observable<any[]> {
    return this.http.get<any>(this.dataUrl).pipe(
      map(response => {
        if (response && Array.isArray(response.patients)) {
          return response.patients.slice(0, 5);
        } else {
          return []; // Return an empty array if the patients array is not present or not an array
        }
      })
    );
  }
 
}
