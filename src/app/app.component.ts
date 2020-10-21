import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fortune';
  deviceInfo = null;
  isMobile: boolean;
  isMobilevar = false;
  isDesktopvar = false;
  constructor(private deviceService: DeviceDetectorService) {
   
    this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet() ? true : false;
   }

  ngOnInit() {
   
  }
  

  
}
