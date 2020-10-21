import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.scss']
})
export class PrimaryNavComponent implements OnInit {
  isMobile: boolean;
  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet() ? true : false;
   }

  ngOnInit() {
  }

}
