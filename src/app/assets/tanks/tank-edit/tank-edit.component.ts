import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tank } from '../models/tank';
import { select, Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TankState } from '../store/tank.reducer';
import { StoreTankCallsService } from '../services/store-tank-calls.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-tank-edit',
  templateUrl: './tank-edit.component.html',
  styleUrls: ['./tank-edit.component.scss']
})
export class TankEditComponent implements OnInit {

  isLoading: boolean = false;
  editForm : FormGroup;
  formObject;
  constructor( public dialogRef: MatDialogRef<TankEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private store: Store<TankState>,
    private storeCallService : StoreTankCallsService, private router: Router) { 
      this.formObject = data.tankobj
     
    }
    options: string[] = ['Above-ground indoor', 'Above-ground outdoor', 'Underground'];
    filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.editForm = new FormGroup({
      tankName: new FormControl("", Validators.required),
      tankType: new FormControl("", Validators.required),
      tankCapacity: new FormControl("", Validators.required),
      tankLength: new FormControl("", Validators.required),
      tankWidth: new FormControl("", Validators.required),
      tankHeight: new FormControl("", Validators.required),
    })

    this.editForm.patchValue(this.formObject);
    this.filteredOptions = this.editForm.controls.tankType.valueChanges
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
    var capacity = parseInt(this.editForm.value['tankCapacity']);
    var tl = parseFloat(this.editForm.value['tankLength']);
    var tw = parseFloat(this.editForm.value['tankWidth']);
    var th = parseFloat(this.editForm.value['tankHeight']);
    this.editForm.value['_id'] = this.formObject._id
    this.editForm.value['id'] = this.formObject.id
    this.editForm.value['assetId'] = this.formObject.assetId
    this.editForm.value['tankCapacity'] = capacity;
    this.editForm.value['tankLength'] = tl;
    this.editForm.value['tankWidth'] = tw;
    this.editForm.value['tankHeight'] = th;
    const update: Update<Tank> = {
      id: this.formObject._id,
      changes: this.editForm.value
    };
    
   console.log(this.editForm.value)
    this.storeCallService.uploadSingleTank(update)
    setTimeout(()=>{
      this.isLoading = false;
    
      this.dialogRef.close({data:"closed"});
    }, 2000);
    
  }


}
