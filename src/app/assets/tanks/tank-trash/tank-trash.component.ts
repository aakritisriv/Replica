import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StoreTankCallsService } from '../services/store-tank-calls.service';

@Component({
  selector: 'app-tank-trash',
  templateUrl: './tank-trash.component.html',
  styleUrls: ['./tank-trash.component.scss']
})
export class TankTrashComponent implements OnInit {

  getId;
  isLoading: boolean = false;
  constructor(private dialogRef: MatDialogRef<TankTrashComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private storeService:StoreTankCallsService) {
      this.getId = data.tankobj
     }

  ngOnInit() {
   
  }
  deleteTank(id: string) {
    this.isLoading = true;
    this.storeService.deleteTank(id)
    setTimeout(()=>{
      this.isLoading = false;
     // 
     // this.router.navigate(['asset/list']);
      this.dialogRef.close({data:"closed"});
    }, 2000);
    
  }
  no(){
    this.dialogRef.close("closed");
  }
}
