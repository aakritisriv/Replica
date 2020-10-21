
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tank } from '../models/tank';

@Injectable({
  providedIn: 'root'
})
export class TankService {

  constructor(private http: HttpClient) {}

  // Fetching my REST API mongo
  baseUrl: string = 'https://localhost:5001/api/tanks/';
  assetUrl: string = 'my/';
  createTank(model: Tank): Observable<Tank> {
    return this.http.post<Tank>(this.baseUrl, model);
  }

  getTanks(): Observable<Tank[]> {
    return this.http.get<Tank[]>(this.baseUrl);
  }

  getTank(Id: string): Observable<Tank> {
    return this.http.get<Tank>(this.baseUrl + Id);
  }
  getAssetTanks(Id: string): Observable<Tank[]>{
    return this.http.get<Tank[]>(this.baseUrl + this.assetUrl + Id);
  }
  editTank(Id: string | number, changes: Partial<Tank>): Observable<Tank> {
    
    return this.http.put<Tank>(this.baseUrl + Id, changes);
  }

  deleteTank(Id: string) {
    return this.http.delete(this.baseUrl + Id);
  }
}
