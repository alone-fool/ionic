import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { PopoverService } from '../popover/popover.service';
// import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [
    RestService,
    PopoverService
  ]
})
export class HomePage {

  constructor(
    private restService: RestService,
    private popoverService: PopoverService,
  ) {}

  sheet() {
    this.restService.presentActionSheet();
  }

  alert() {
    this.restService.presentAlert();
  }

  modal() {
    this.restService.presentModal();
  }

  popover() {
    this.popoverService.presentPopover(event);
  }

  toast() {
    this.restService.presentToast();
  }

  toastWithOptions() {
    this.restService.presentToastWithOptions();
  }
}
