import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { ReviewModalPage } from '../review-modal/review-modal';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-review-subjective-question',
  templateUrl: 'review-subjective-question.html',
})
export class ReviewSubjectiveQuestionPage {
  
  private reviewQuestionsForm:FormGroup;

  class:any[];
  qType:any[];
  subject:any[];
  topic:any[];
  sub_topic:any[];
  qSubType:any[];
  questions:any[];
  
  singleMCQQuestions:Array<{num:number, question:string,options:options[], correctOption:string}>
  multipleMCQQuestions:Array<{num:number, question:string,options:options[], correctOptions:string[]}>
  formShow:boolean = true;
  btnShow:boolean = false;
  checkMCQ:boolean = false;
  subjective:boolean = false;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, private formBuilder: FormBuilder, private dataService:DataServiceProvider) {

    this.reviewQuestionsForm = this.formBuilder.group(
      {
        inpQSubType:[''],
        inpClass: [''],
        inpSubject:[''],
        inpTopic:[''],
        inpSubTopic:['']
      });
    
  }

  getAllClass():void
  {
    this.dataService.getClass().subscribe(
      result => {
        if (result.status === "ok") {
          this.class = result.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  getSubject(classId:any)
  {
    this.dataService.getSubjectByClass(classId)
    .subscribe(
        result => {
          if (result.status === "ok") {
            this.subject = result.data;
          }
        },
      error => {
        console.log(error);
      }
    );
  }

  getTopic(subId:any)
  {
    let classId:any;      
    for(let cls of this.class)
    {
      if(this.reviewQuestionsForm.value.inpClass == cls.class_name)
      {
        classId = cls.class_id;
      }
    }
    this.dataService.getTopicByClassSubject(classId, subId)
    .subscribe(
        result => {
          if (result.status === "ok") {
            this.topic = result.data;
          }
        },
      error => {
        console.log(error);
      }
    );
  }

  getSubTopic(topId:any)
  {
    this.dataService.getSubtopicByTopic(topId).subscribe(
      result => {
        if (result.status === "ok") {
          this.sub_topic = result.data;
        }
      },
    error => {
      console.log(error);
    }
  );
  }

  getQuestionType()
  {
    this.dataService.getQType().subscribe(
      result => {
        if (result.status === "ok") {
          this.qType = result.data;
        }
      },
    error => {
      console.log(error);
    }
  );
  }

  getQSubType(qId:any)
  {
    this.dataService.getQuestionSubtypeDataByQuestiontype(qId).subscribe(
      result => {
        if (result.status === "ok") {
          this.qSubType = result.data;
        }
      },
    error => {
      console.log(error);
    }
  );
  }

  getAllMCQReviewQuestions()
  {
    let qt_id:string = "1";
    let class_id:string = this.reviewQuestionsForm.value.inpClass;
    let q_st_id:string = this.reviewQuestionsForm.value.inpQSubType;
    let st_id:string = this.reviewQuestionsForm.value.inpSubTopic;
    let sub_id:string = this.reviewQuestionsForm.value.inpSubject;
    let top_id:string = this.reviewQuestionsForm.value.inpTopic;
    
    this.dataService.getReviewQuestions(qt_id, class_id, q_st_id, st_id, sub_id, top_id).subscribe(
      result => {
        if (result.status === "ok") {
          this.questions = result.data;
          console.log(this.questions);
        }

        else
        {
          alert('No records Found!');
        }
      },
    error => {
      console.log(error);
    }
  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewObjectiveQuestionPage');
    this.getQSubType("1")
  }

  logForm()
  {
    console.log(this.reviewQuestionsForm.value);
    this.subjective = true;
  }

  hideForm()
  {
    this.formShow = false;
    this.btnShow = true;
  }
  showForm()
  {
    this.formShow = true;
    this.btnShow = false;
  }

  openModal(num:any) {
    const modalData = {qTypeId:"1", qId:num};
    let modal = this.modalCtrl.create(ReviewModalPage, {data:modalData});
    modal.present();
  }

}

export interface options
{
  num:string;
  value:string;
}
