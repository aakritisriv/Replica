import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { StoreAssetCallsService } from '../services/store-calls.service';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {
  isLoading: boolean = false;
  addForm : FormGroup;
  constructor(private dialogRef: MatDialogRef<AssetAddComponent>, private storeCallService: StoreAssetCallsService) { }
  options: string[] = ['Well', 'Non-well'];
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      field: new FormControl("", Validators.required),
    })
    this.filteredOptions = this.addForm.controls.type.valueChanges
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
    this.isLoading = true;
   
    setTimeout(()=>{
      this.isLoading = false;
      this.storeCallService.addSingleAsset( this.addForm.value)
    this.dialogRef.close();
    }, 3000)
    
  }

}
