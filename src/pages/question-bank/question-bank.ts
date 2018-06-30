import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FormBuilder, FormGroup } from '@angular/forms';

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

  class:Array<{name:string, value:string}>;
  subject:Array<{name:string}>;
  topic:Array<{name:string}>;
  sub_topic:Array<{name:string}>;
  qSubType:Array<{name:any}>;

  private quesBankDetails:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

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

  logForm()
  {
    console.log(this.quesBankDetails.value);
  }

  check(value:any)
  {  
    console.log(value);
    if(value =="Subjective")
    {
      this.qSubType = [{name:'Fill in The Blanks'},
                      {name:'Identify'},
                      {name:'One Line'},
                      {name:'Very Short Answer'},
                      {name:'Short Answer'},
                      {name:'Long Answer'},
                      {name:'Very Long Answer'}];
    }   
    if(value =="Objective")
    {
      this.qSubType = [{name:'MCQ Single Response'},
                      {name:'MCQ Multiple Response'},
                      {name:'True/False'},
                      {name:'Match The Followings'},
                      {name:'Matrix Match'}]; 
    }    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionBankPage');
  }

}
