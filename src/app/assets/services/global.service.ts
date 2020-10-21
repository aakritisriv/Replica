


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Asset } from '../models/asset';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  // Fetching my REST API mongo
  baseUrl: string = 'https://localhost:5001/api/assets/';
  createAsset(model: Asset): Observable<Asset> {
    return this.http.post<Asset>(this.baseUrl, model);
  }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.baseUrl);
  }

  getAsset(Id: string): Observable<Asset> {
    return this.http.get<Asset>(this.baseUrl + Id);
  }

  editAsset(Id: string | number, changes: Partial<Asset>): Observable<Asset> {
    
    return this.http.put<Asset>(this.baseUrl + Id, changes);
  }

  deleteAsset(Id: string) {
    return this.http.delete(this.baseUrl + Id);
  }
}
