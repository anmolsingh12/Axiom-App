import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage {

  // @ViewChild("qType")qType;
  // @ViewChild("qSubType")qSubType1;

  board:Array<{name:string, alias:string }>;
  class:Array<{name:string, value:string}>;
  subject:Array<{name:string}>;
  topic:Array<{name:string}>;
  sub_topic:Array<{name:string}>;
  qSubType:Array<{name:any}>;
  subjective:boolean = false;
  objective:boolean = false;
  checkFill:boolean = false;
  checkIdentify:boolean = false;
  checkOneLine:boolean = false;
  checkVSA:boolean = false;
  checkSA:boolean = false;
  checkLA:boolean = false;
  checkVLA:boolean = false;
  checkMcqSingle:boolean = false;
  checkMcqMultiple:boolean = false;
  checkTF:boolean = false;
  checkMatch:boolean = false;
  checkMatrix:boolean = false;

  form:Array<{brd:string, class:string, subject:string, topic:string,
               subtopic:string, qType:string, qSubType:string, skillType:string,
               difficultyLevel:string, marks:number, negativeMarks:number, time:number,
               reference:string}>;

  questionDetails:Array<{question:string, answer:string, explaination:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
  
    this.board = [{name:'Central Board of Secondary Education', alias:'CBSE'},
                  {name: 'Indian School Certificate Examinations', alias:'ICSE'},
                  {name:'Andhra Pradesh Board of Secondary Education', alias:'APBSE'},
                  {name:'Board of Higher Secondary Education', alias:'BHSE'}];
  
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
                  
  }

  logForm()
  {
    console.log(this.form+"   "+this.questionDetails );
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

  checkOption(val:any)
  {
    if(val == "Fill in The Blanks")
    {
      this.checkFill = true;
      this.checkIdentify = false;
      this.checkOneLine = false;
      this.checkVSA = false;
      this.checkSA = false;
      this.checkLA = false;
      this.checkVLA = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
      this.checkTF = false;
      this.checkMatch = false;
      this.checkMatrix = false;
    }

    else if(val == "Identify")
    {
      this.checkIdentify = true;
      this.checkFill = false;
      this.checkMatch = false;
      this.checkOneLine = false;
      this.checkVSA = false;      
      this.checkSA = false;
      this.checkMatrix = false;
      this.checkLA = false;
      this.checkVLA = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
      this.checkTF = false;
    }
    
    else if(val == "One Line")
    {
      this.checkOneLine = true;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkVSA = false;
      this.checkSA = false;
      this.checkMatrix = false;
      this.checkMatch = false;
      this.checkLA = false;
      this.checkVLA = false;
      this.checkTF = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "Very Short Answer")
    {
      this.checkVSA = true;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkLA = false;
      this.checkTF = false;
      this.checkMatrix = false;
      this.checkMatch = false;
      this.checkVLA = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "Short Answer")
    {
      this.checkVSA = true;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkTF = false;
      this.checkLA = false;
      this.checkVLA = false;
      this.checkMatrix = false;
      this.checkMatch = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "Very Short Answer")
    {
      this.checkVSA = true;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkLA = false;
      this.checkTF = false;
      this.checkVLA = false;
      this.checkMatch = false;
      this.checkMatrix = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "Long Answer")
    {
      this.checkLA = true;
      this.checkVSA = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkTF = false;
      this.checkVLA = false;
      this.checkMatrix = false;
      this.checkMatch = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;   
    }

    else if(val == "Very Long Answer")
    {
      this.checkVLA = true;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkTF = false;
      this.checkMatrix = false;
      this.checkMatch = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "MCQ Single Response")
    {
      this.checkMcqSingle = true;
      this.checkVLA = false;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkMatrix = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkMatch = false;
      this.checkTF = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "MCQ Multiple Response")
    {
      this.checkMcqMultiple = true;
      this.checkMcqSingle = false;
      this.checkVLA = false;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkMatrix = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
      this.checkMatch = false;
      this.checkTF = false;
    }
    else if(val == "True/False")
    {
      this.checkTF = true;
      this.checkMcqMultiple = false;
      this.checkMcqSingle = false;
      this.checkVLA = false;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkMatrix = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkMatch = false;
      this.checkIdentify = false;
      this.checkSA = false;
    }
    else if (val == "Match The Followings")
    {
      this.checkMatch = true;
      this.checkTF = false;
      this.checkMcqMultiple = false;
      this.checkMcqSingle = false;
      this.checkVLA = false;
      this.checkMatrix = false;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
    }

    else if(val=="Matrix Match")
    {
      this.checkMatrix = true;
      this.checkMatch = false;
      this.checkTF = false;
      this.checkMcqMultiple = false;
      this.checkMcqSingle = false;
      this.checkVLA = false;
      this.checkLA = false;
      this.checkVSA = false;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkSA = false;
    }
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestionPage');
  }

}
