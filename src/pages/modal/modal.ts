import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  topic:Array<{name:string}>;
  sub_topic:Array<{name:string}>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public platform: Platform,
     public actionsheetCtrl: ActionSheetController ) {
  
    this.topic = [{name:'Topic 1'}, {name : 'Topic 2'}, {name : 'Topic 3'}, {name : 'Topic 4'}];

    this.sub_topic = [{name:'Sub-Topic 1'}, {name : 'Sub-Topic 2'}, {name : 'Sub-Topic 3'}, {name : 'Sub-Topic 4'}];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Actions on Question',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Action 1',
          role: 'destructive',
          handler: () => {
            console.log('Action 1 clicked');
          }
        },
        {
          text: 'Action 2',
          handler: () => {
            console.log('Action 2 clicked');
          }
        },
        {
          text: 'Action 3',
          handler: () => {
            console.log('Action 3 clicked');
          }
        },
        {
          text: 'Action 4',
          handler: () => {
            console.log('Action 4 clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
