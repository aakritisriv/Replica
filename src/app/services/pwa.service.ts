import { Injectable } from '@angular/core';

import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet} from '@angular/material/bottom-sheet'

import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) { }

  // public initPwaPrompt() {
  //   if (this.platform.ANDROID) {
  //     window.addEventListener('beforeinstallprompt', (event: any) => {
  //       event.preventDefault();
  //       this.promptEvent = event;
  //       this.openPromptComponent('android');
  //     });
  //   }
  //   if (this.platform.IOS) {
  //     const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
  //     if (!isInStandaloneMode) {
  //       this.openPromptComponent('ios');
  //     }
  //   }
  // }

  // private openPromptComponent(mobileType: 'ios' | 'android') {
  //   timer(3000)
  //     .pipe(take(1))
  //     .subscribe(() => this.bottomSheet.open(PromptComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  // }
}
