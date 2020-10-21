import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  deviceInfo = null;
  isMobilevar = false;
  isDesktopvar = false;
  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
    this.isMobileDevice();
    this.isDesktopDevice();
    
   }
 

  ngOnInit() {
  }
  getDeviceInfo(){
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }
  isMobileDevice(){
    this.isMobilevar = this.deviceService.isMobile();
  }
  isDesktopDevice(){
    this.isDesktopvar = this.deviceService.isDesktop();
  }

}
