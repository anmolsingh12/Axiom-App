import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

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

  ques_id:any;
  questionData:any[];
  class:any[];
  topic:any[];
  subTopic:any[];
  subject:any[];
  questiondata:any[];

  subjective:boolean = false;
  objective:boolean = false;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController,
     public platform: Platform,
     public actionsheetCtrl: ActionSheetController,
      private dataService:DataServiceProvider ) {
  }

  ionViewDidLoad() {
    this.ques_id = this.navParams.get('data');
    this.getQuestion();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  checkQType()
  {
    if( this.ques_id.qTypeId == "1")
    {
      this.subjective = true;
      this.objective = false;
    }

    else if( this.ques_id.qTypeId == "2")
    {
      this.objective = true;
      this.subjective = false;
    }
  }

  getQuestion()
  {
    this.checkQType();
    let qId = this.ques_id.qId;
    let qTypeId = this.ques_id.qTypeId;
    this.dataService.getQuestionByQID(qTypeId, qId).subscribe(
       result => {
          if (result.status === "ok") {
              this.questionData = result.data;
              console.log(this.questionData);
           }
        },
       error => {
        console.log(error);
       }
    );
  }


  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Actions on Question',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Publish',
          handler: () => {
            console.log('Publish Button clicked');
          }
        },
        {
          text: 'Edit',
          handler: () => {
            console.log('Action 2 clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Action 3 clicked');
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
