import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Asset } from '../models/asset';
import { select, Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { AssetState } from '../store/asset.reducer';
import { StoreAssetCallsService } from '../services/store-calls.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {
  isloading: boolean = false;
  editForm : FormGroup;
  formObject;
  constructor( public dialogRef: MatDialogRef<AssetEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private store: Store<AssetState>,
    private storeCallService : StoreAssetCallsService, private router: Router) { 
      this.formObject = data.assetobj
    }
    options: string[] = ['Well', 'Non-well'];
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.editForm = new FormGroup({
      name: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      field: new FormControl("", Validators.required),
    })

    this.editForm.patchValue(this.formObject);
    this.filteredOptions = this.editForm.controls.type.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onSubmit(){
    this.isloading = true;
    this.editForm.value['_id'] = this.formObject._id
    this.editForm.value['id'] = this.formObject.id
    
    const update: Update<Asset> = {
      id: this.formObject._id,
      changes: this.editForm.value
    };
   
    this.storeCallService.uploadSingleAsset(update)
    setTimeout(()=>{
      this.isloading = false;
     // 
     // this.router.navigate(['asset/list']);
      this.dialogRef.close({data:"closed"});
    }, 2000);
    
  }

}
