import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewSubjectiveQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-subjective-question',
  templateUrl: 'review-subjective-question.html',
})
export class ReviewSubjectiveQuestionPage {
  qSubType:Array<{name:any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.qSubType = [{name:'Fill in The Blanks'},
                      {name:'Identify'},
                      {name:'One Line'},
                      {name:'Very Short Answer'},
                      {name:'Short Answer'},
                      {name:'Long Answer'},
                      {name:'Very Long Answer'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewSubjectiveQuestionPage');
  }

}
