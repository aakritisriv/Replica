import { Component, OnInit } from '@angular/core';
import { StoreTankCallsService } from '../services/store-tank-calls.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { TankService } from '../services/tank.service';
import { Tank } from './../models/tank';
import {MatDialog} from '@angular/material/dialog';
import { TankEditComponent } from '../tank-edit/tank-edit.component';
import { TankTrashComponent } from '../tank-trash/tank-trash.component';


@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrls: ['./tank-list.component.scss']
})
export class TankListComponent implements OnInit {
  showTanks$: boolean = false;
  tanks$;
  assetId;
  constructor(
    private storeService: StoreTankCallsService,
    public router: Router, private route: ActivatedRoute, private services:TankService,public dialog: MatDialog) {
     this.route.params.subscribe((data)=>{
      //  console.log(data)
       this.assetId = data.id
     })
    }

  ngOnInit() {
     this.storeService.storeTankCall(this.assetId);
     this.tanks$ = this.storeService.loadAssetTanks();
    
    // this.services.getAssetTanks(this.assetId).subscribe((val)=>{
      
    //   if(val.length > 0){
    //     this.tanks$ = val;
    //     this.showTanks$ = true;
    //   }
    //   else{
    //    this.showTanks$ = false;
    //   }
      
    // })

   // this.storeService.storeCall();
   // this.tanks$ = this.storeService.loadTanksbyAssetId() 
   
   
  }
  
  openDialog(tank){
    this.dialog.open(TankEditComponent, {
      width: '800px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { tankobj: tank, assetId:this.assetId  }
    })
    .afterClosed().subscribe((data) => {
     
      if(data.data){
        this.storeService.storeTankCall(this.assetId);
        this.tanks$ = this.storeService.loadAssetTanks();
    
      }
    })

   
  }
  goToassets(){
    this.router.navigate(['asset/list'])
  }
  opendelDialog(idDel){
    this.dialog.open(TankTrashComponent, {
      width: '800px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { tankobj: idDel  }
    }).afterClosed().subscribe((data) => {
     
      if(data.data){
        this.storeService.storeTankCall(this.assetId);
        this.tanks$ = this.storeService.loadAssetTanks();
    
      }
    })

  }
}
