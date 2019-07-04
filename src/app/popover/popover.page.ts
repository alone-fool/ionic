import { Component, OnInit } from '@angular/core';
// import { RestService } from '../rest.service';
import { PopoverService } from './popover.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  providers: [
    PopoverService
  ]
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverService: PopoverService
  ) { }

  ngOnInit() {
  }

  popoverDismiss() {
    this.popoverService.popoverDismiss();
  }
}
