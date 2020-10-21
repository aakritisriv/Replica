import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { AssetState } from '../store/asset.reducer';
import { Store, select } from '@ngrx/store';
import { StoreAssetCallsService } from '../services/store-calls.service';
@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  asset$: Observable<Asset>;
  public id_;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<Asset>,
    private storeCallService: StoreAssetCallsService
  ) {}

  ngOnInit() {
    this.id_ = this.route.snapshot.paramMap.get('id')
    
    this.storeCallService.loadSingleAsset(this.id_)
    

    this.asset$ = this.storeCallService.loadSingleAssetData();
  }
  back(){
    this.router.navigate(['/']);
  }

}
