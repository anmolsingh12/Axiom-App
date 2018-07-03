import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewObjectiveQuestionPage } from '../review-objective-question/review-objective-question'
import { ReviewSubjectiveQuestionPage } from '../review-subjective-question/review-subjective-question'

/**
 * Generated class for the ReviewAddedQuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-added-questions',
  templateUrl: 'review-added-questions.html',
})
export class ReviewAddedQuestionsPage {

  qSubType:Array<{name:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewAddedQuestionsPage');
  }

  openObjectiveReviewPage()
  {
    this.navCtrl.setRoot(ReviewObjectiveQuestionPage);
  }

  openSubjectiveReviewPage()
  {
    this.navCtrl.setRoot(ReviewSubjectiveQuestionPage);
  }

}
