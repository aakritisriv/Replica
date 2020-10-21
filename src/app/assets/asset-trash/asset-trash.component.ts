import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StoreAssetCallsService } from '../services/store-calls.service';

@Component({
  selector: 'app-asset-trash',
  templateUrl: './asset-trash.component.html',
  styleUrls: ['./asset-trash.component.scss']
})
export class AssetTrashComponent implements OnInit {
  getId;
  isLoading: boolean = false;
  constructor(private dialogRef: MatDialogRef<AssetTrashComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private storeService:StoreAssetCallsService) {
      this.getId = data.assetobj
     }

  ngOnInit() {
   
  }
  deleteAsset(id: string) {
    this.isLoading = true;
    this.storeService.deleteAsset(id)
    setTimeout(()=>{
      this.isLoading = false;
     // 
     // this.router.navigate(['asset/list']);
      this.dialogRef.close("closed");
    }, 2000);
    
  }
  no(){
    this.dialogRef.close("closed");
  }

}
