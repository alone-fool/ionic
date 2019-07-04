import { Injectable } from '@angular/core';
import { PopoverPage } from './popover.page';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(
    private popoverController: PopoverController
  ) { }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  popoverDismiss() {
    this.popoverController.dismiss();
  }
}
