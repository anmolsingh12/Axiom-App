import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
  providers:[HttpClient]
})

export class AddQuestionPage 
{
  private quesEntry:FormGroup;
  private quesDetails:FormGroup;
  private quesAns:FormGroup;
  private objectiveQuesAns:FormGroup;
  //private multipleMCQ:FormGroup;

  board:any[];
  class:any[];
  subject:any[];
  topic:any[];
  sub_topic:any[];

  qType:any[];
  qSubType:any[];
  skillData:any[];
  difficultyLevel:any[];
  answer:any;

  marks:Array<{value:string}>;
  negMarks:Array<{value:string}>;
  time:Array<{value:string}>;

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
  questionEntry:boolean = true;
  selectParameters:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private dataService:DataServiceProvider) 
  {
    
    this.quesEntry = this.formBuilder.group(
      {
        inpBoard: [''],
        inpClass: [''],
        inpSubject:[''],
        inpTopic:[''],
        inpSubTopic:['']
      });

      this.quesDetails = this.formBuilder.group(
        {
          inpQType:[''],
          inpQSubType:[''],
          inpSkillType:[''],
          inpDifficultyLevel:[''],
          inpMarks:[''],
          inpNegMarks:[''],
          inpTime:[''],
          inpReference:['']
        });

        this.quesAns = this.formBuilder.group(
          {
            question:[''],
            answer:[''],
            explaination:['']
          });
        
        this.objectiveQuesAns = this.formBuilder.group(
          {
            question:[''],
            option1:[''],
            option2:[''],
            option3:[''],
            option4:[''],
            correctOption:[''],
            answer:['']
          }
          
        );
        this.marks = [{value:"1"},
                      {value:"2"},
                      {value:"3"},
                      {value:"4"},
                      {value:"5"},
                      {value:"6"},
                      {value:"7"},
                      {value:"8"},
                      {value:"9"},
                      {value:"10"}]

        this.negMarks = [{value:"-1"},
                          {value:"-2"},
                          {value:"-3"},
                          {value:"-4"},
                          {value:"-5"},
                          {value:"-6"},]
        
        this.time = [{value:"1"},
                          {value:"2"},
                          {value:"3"},
                          {value:"4"},
                          {value:"5"},
                          {value:"6"},
                          {value:"7"},
                          {value:"8"},
                          {value:"9"},
                          {value:"10"}]

        // this.multipleMCQ = this.formBuilder.group(
        //   {
        //     question:[''],
        //     option1:[''],
        //     option2:[''],
        //     option3:[''],
        //     option4:[''],
        //     correctOption:[],
        //     answer:['']
        //   }
        // );
  }

  getAllBoard() :void
  {
    this.dataService.getBoard().subscribe(
      result => {
        if (result.status === "ok") {
          this.board = result.data;
        }
      },
      error => {
        console.log(error);
      }
    );
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
      if(this.quesEntry.value.inpClass == cls.class_name)
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

  getSkill()
  {
    this.dataService.getSkillData().subscribe(
      result => {
        if (result.status === "ok") {
          this.skillData = result.data;
        }
      },
    error => {
      console.log(error);
    }
    );
  }

  getDifficulty()
  {
    this.dataService.getAllDifficulties().subscribe(
      result => {
        if (result.status === "ok") {
          this.difficultyLevel = result.data;
        }
      },
    error => {
      console.log(error);
    }
    );
  }

  
  logForm()
  {
    if(this.objectiveQuesAns.value.answer=="A")
    {
      this.objectiveQuesAns.value.correctOption=this.objectiveQuesAns.value.option1;
    }

    else if(this.objectiveQuesAns.value.answer=="B")
    {
      this.objectiveQuesAns.value.correctOption=this.objectiveQuesAns.value.option2;
    }

    else if(this.objectiveQuesAns.value.answer=="C")
    {
      this.objectiveQuesAns.value.correctOption=this.objectiveQuesAns.value.option3;
    }

    else if(this.objectiveQuesAns.value.answer=="D")
    {
      this.objectiveQuesAns.value.correctOption=this.objectiveQuesAns.value.option4;
    }
    console.log(this.quesEntry.value);
    console.log(this.quesDetails.value);
    console.log(this.quesAns.value);
    console.log(this.objectiveQuesAns.value);
  }

  
  addSubjectiveQuestion()
  {
    this.answer = {qopt_answer:this.quesAns.value.answer};
    this.dataService.addSubjectiveQuestions(
      this.quesEntry.value.inpBoard,
      this.quesEntry.value.inpClass,
      this.quesEntry.value.inpSubject,
      this.quesEntry.value.inpTopic,
      this.quesEntry.value.inpSubTopic,
      this.quesDetails.value.inpQType,
      this.quesDetails.value.inpQSubType,
      this.quesDetails.value.inpSkillType,
      this.quesDetails.value.inpDifficultyLevel,
      this.quesDetails.value.inpMarks,
      this.quesDetails.value.inpNegMarks,
      this.quesDetails.value.inpTime,
      this.quesDetails.value.inpReference,
      this.quesAns.value.question,
      this.quesAns.value.explaination,
      this.answer,
      this.quesAns.value.answer,
    ).subscribe(
      result => {
      },
    error => {
      console.log(error);
    }
    );
  }

  resetForm()
  {
    this.quesAns.reset();
  }

  hideForm()
  {
    this.selectParameters = false;
    this.questionEntry = false;
  }

  showForm()
  {
    this.selectParameters = true;
    this.questionEntry = true;

  }


  // questionEntryFormSubmit(value:any)
  // {
  //   console.log(this.quesEntry.value);
  //   console.log(this.quesDetails.value);
  // }

  checkOption(val:any)
  {
    console.log(val);
    if(val == "6")
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

    else if(val == "7")
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
    
    else if(val == "8")
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

    else if(val == "9")
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

    else if(val == "10")
    {
      this.checkSA = true;
      this.checkOneLine = false;
      this.checkFill = false;
      this.checkIdentify = false;
      this.checkVSA = false;
      this.checkLA = false;
      this.checkTF = false;
      this.checkVLA = false;
      this.checkMatch = false;
      this.checkMatrix = false;
      this.checkMcqSingle = false;
      this.checkMcqMultiple = false;
    }

    else if(val == "11")
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

    else if(val == "12")
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

    else if(val == "1")
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

    else if(val == "2")
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
    else if(val == "3")
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
    else if (val == "4")
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

    else if(val=="5")
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
    this.getAllBoard();
    this.getAllClass();
    this.getQuestionType();
  }

}
