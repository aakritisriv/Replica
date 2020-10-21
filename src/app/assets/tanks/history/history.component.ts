import { Component, OnInit } from '@angular/core';
import { StoreTankCallsService } from '../services/store-tank-calls.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TankService } from '../services/tank.service';
import { Tank } from './../models/tank';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  tanks$: Observable<Tank[]>;
  count;
  constructor(
    private storeService: StoreTankCallsService,
    public router: Router, private services:TankService) {
     
    }

  ngOnInit() {
    this.storeService.storeCall();
    this.tanks$ = this.storeService.loadTanks();
   
  }
  goToassets(){
    this.router.navigate(['assets/list'])
  }

}
