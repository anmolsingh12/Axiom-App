import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalPage } from '../modal/modal';
import { ModalController } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

/**
 * Generated class for the QuestionBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-bank',
  templateUrl: 'question-bank.html',
})
export class QuestionBankPage {

  class:any[];
  qType:any[];
  subject:any[];
  topic:any[];
  sub_topic:any[];
  qSubType:any[];
  questions:any[];
  questionEntry:boolean = true;

  subjective:boolean = false;
  objective:boolean = false;


  private quesBankDetails:FormGroup;

 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public modalCtrl: ModalController,
              private dataService:DataServiceProvider) {         

    this.quesBankDetails = this.formBuilder.group(
      {
        inpQType:[''],
        inpQSubType:[''],
        inpClass: [''],
        inpSubject:[''],
        inpTopic:[''],
        inpSubTopic:['']
      });
  }

  checkQType()
  {
    if( this.quesBankDetails.value.inpQType == "1")
    {
      this.subjective = true;
      this.objective = false;
    }

    else if( this.quesBankDetails.value.inpQType == "2")
    {
      this.objective = true;
      this.subjective = false;
    }
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
      if(this.quesBankDetails.value.inpClass == cls.class_name)
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

  getAllQuestions()
  {
    let qt_id:string = this.quesBankDetails.value.inpQType;
    let class_id:string = this.quesBankDetails.value.inpClass;
    let q_st_id:string = this.quesBankDetails.value.inpQSubType;
    let st_id:string = this.quesBankDetails.value.inpSubTopic;
    let sub_id:string = this.quesBankDetails.value.inpSubject;
    let top_id:string = this.quesBankDetails.value.inpTopic;
    
    this.dataService.getQuestions(qt_id, class_id, q_st_id, st_id, sub_id, top_id).subscribe(
      result => {
        if (result.status === "ok") {
          this.questions = result.data;
        }
      },
    error => {
      console.log(error);
    }
  );
  }

  openModal(num:any) {
    const modalData = {qTypeId:this.quesBankDetails.value.inpQType, qId:num};
    let modal = this.modalCtrl.create(ModalPage, {data:modalData});
    modal.present();
  }

  logForm()
  {
    console.log(this.quesBankDetails.value);
  }

  hideForm()
  {
    this.questionEntry = false;
  }

  showForm()
  {
    this.questionEntry = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionBankPage');
    this.getQuestionType();
    this.getAllClass();
  }

}
