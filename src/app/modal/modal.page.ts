import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  providers:[
    RestService
  ]
})
export class ModalPage implements OnInit {


  constructor(
    private restService: RestService
  ) { 
  }

  ngOnInit() {
  }

  dismiss() {
    this.restService.modalDismiss();
  }
}
