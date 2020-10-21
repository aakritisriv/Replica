import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { StoreTankCallsService } from '../services/store-tank-calls.service';
@Component({
  selector: 'app-tank-add',
  templateUrl: './tank-add.component.html',
  styleUrls: ['./tank-add.component.scss']
})
export class TankAddComponent implements OnInit {
  assetId;
  isLoading: boolean = false;
  addForm : FormGroup;
  constructor(private dialogRef: MatDialogRef<TankAddComponent>, 
     @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private storeCallService: StoreTankCallsService) {
       
       this.assetId = data;
      }
      options: string[] = ['Above-ground indoor', 'Above-ground outdoor', 'Underground'];
      filteredOptions: Observable<string[]>;
    
  ngOnInit() {
    this.addForm = new FormGroup({
      TankType: new FormControl("", Validators.required),
      TankName: new FormControl("", Validators.required),
      TankCapacity: new FormControl("", Validators.required),
      TankWidth: new FormControl("", Validators.required),
      TankLength: new FormControl("", Validators.required),
      TankHeight: new FormControl("", Validators.required),
    })
    this.filteredOptions = this.addForm.controls.TankType.valueChanges
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
    var capacity = parseInt(this.addForm.value['TankCapacity']);
    var tl = parseFloat(this.addForm.value['TankLength']);
    var tw = parseFloat(this.addForm.value['TankWidth']);
    var th = parseFloat(this.addForm.value['TankHeight']);
    this.addForm.value['AssetId'] = this.assetId.assetobj
    this.addForm.value['TankCapacity'] = capacity;
    this.addForm.value['TankLength'] = tl;
    this.addForm.value['TankWidth'] = tw;
    this.addForm.value['TankHeight'] = th;
     
     setTimeout(()=>{
      this.isLoading = false;
      this.storeCallService.addSingleProduct( this.addForm.value)
      this.dialogRef.close();
     }, 3000)
    // this.storeCallService.addSingleProduct( this.addForm.value)
    // this.dialogRef.close();
  }

}
