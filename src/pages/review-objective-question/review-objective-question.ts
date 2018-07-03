import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the ReviewObjectiveQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-objective-question',
  templateUrl: 'review-objective-question.html',
})
export class ReviewObjectiveQuestionPage {
  
  private reviewQuestionsForm:FormGroup;

  qSubType:Array<{name:any}>;
  class:Array<{name:string, value:string}>;
  subject:Array<{name:string}>;
  topic:Array<{name:string}>;
  sub_topic:Array<{name:string}>;
  singleMCQQuestions:Array<{num:number, question:string,options:options[], correctOption:string}>
  multipleMCQQuestions:Array<{num:number, question:string,options:options[], correctOptions:string[]}>
  formShow:boolean = true;
  btnShow:boolean = false;
  checkMCQ:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    this.reviewQuestionsForm = this.formBuilder.group(
      {
        inpQSubType:[''],
        inpClass: [''],
        inpSubject:[''],
        inpTopic:[''],
        inpSubTopic:['']
      });
    
    this.qSubType = [{name:'MCQ Single Response'},
    {name:'MCQ Multiple Response'},
    {name:'True/False'},
    {name:'Match The Followings'},
    {name:'Matrix Match'}];
    
    this.class = [{name:'I', value:'1'},
                  {name:'II', value:'2'},
                  {name:'III', value:'3'},
                  {name:'IV', value:'4'},
                  {name:'V', value:'5'},
                  {name:'VI', value:'6'},
                  {name:'VII', value:'7'},
                  {name:'VIII', value:'8'},
                  {name:'IX', value:'9'},
                  {name:'X', value:'10'},
                  {name:'XI', value:'11'},
                  {name:'XII', value:'12'}];
    
    this.subject = [{name:'Subject 1'}, {name : 'Subject 2'}, {name : 'Subject 3'}, {name : 'Subject 4'}];

    this.topic = [{name:'Topic 1'}, {name : 'Topic 2'}, {name : 'Topic 3'}, {name : 'Topic 4'}];

    this.sub_topic = [{name:'Sub-Topic 1'}, {name : 'Sub-Topic 2'}, {name : 'Sub-Topic 3'}, {name : 'Sub-Topic 4'}];

    this.singleMCQQuestions = [{num:1, question:'Apple is a :', options:[
                                                                {
                                                                  num:'A',
                                                                  value:'Vegetable'
                                                                },
                                                                {
                                                                  num:'B',
                                                                  value:'Fruit'
                                                                },
                                                                {
                                                                  num:'C',
                                                                  value:'Rock'
                                                                },
                                                                {
                                                                  num:'D',
                                                                  value:'None of The Above'
                                                                }
                                                              ]
                                , correctOption:'B'},

                                {num:2, question:'Every computer connected to the Internet is identified by a unique four-part string, known as :',
                                                               options:[
                                                              {
                                                                num:'A',
                                                                value:'IP address'
                                                              },
                                                              {
                                                                num:'B',
                                                                value:'Host name'
                                                              },
                                                              {
                                                                num:'C',
                                                                value:'Domain name'
                                                              },
                                                              {
                                                                num:'D',
                                                                value:'None of The Above'
                                                              }
                                                            ]
                                , correctOption:'A'}
                            ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewObjectiveQuestionPage');
  }

  logForm()
  {
    console.log(this.reviewQuestionsForm.value)
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

  selectDiv()
  {
    console.log(this.reviewQuestionsForm.value.inpQSubType);
    if (this.reviewQuestionsForm.value.inpQSubType == "MCQ Single Response")
    {
      this.checkMCQ = true;
    }
  }
}

export interface options
{
  num:string;
  value:string;
}
