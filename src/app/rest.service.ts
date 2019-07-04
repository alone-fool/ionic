import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActionSheetController, AlertController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
// import { PopoverPage } from './popover/popover.page'


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'http://192.168.10.147:3000';

  constructor(
    private http: HttpClient,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public modalController: ModalController,
    public popoverController: PopoverController,
    public toastController: ToastController
  ) { }

  getRank() {
    let url = this.apiUrl + '/top/list?idx=1';
    return this.http.get(url);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, 
        {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, 
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, 
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
    ]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert message',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'name1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2',
          value: 'hello',
          placeholder: 'name2'
        },
        {
          name: 'url',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'url'
        },
        {
          name: 'date',
          type: 'date',
          min: '2017-01-01',
          max: '2020-01-01'
        },
        {
          name: 'number',
          type: 'number',
          min: -5,
          max: 10
        },
        // {
        //   name: 'sex',
        //   type: 'checkbox',
        //   label: 'man',
        //   value: 'man',
        //   checked: true
        // },
        // {
        //   name: 'sex',
        //   type: 'checkbox',
        //   label: 'woman',
        //   value: 'woman',
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', 
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('OK');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }
  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your setting have been saved',
      duration: 2000
    });
    toast.present();
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite');
          }
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });
    toast.present();
  }
}
