import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-bulk-upload',
  templateUrl: 'bulk-upload.html',
})
export class BulkUploadPage {

  board:any[];
  class:any[];
  subject:any[];
  topic:any[];
  sub_topic:any[];

  qType:any[];
  qSubType:any[];
  skillData:any[];
  difficultyLevel:any[];

  private questionTemplateGeneratorForm:FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private fileChooser: FileChooser, 
              private formBuilder: FormBuilder,
              private dataService:DataServiceProvider) {
    
    this.questionTemplateGeneratorForm = this.formBuilder.group(
      {
        inpBoard:[''],
        inpClass: [''],
        inpSubject:[''],
        inpTopic:[''],
        inpSubTopic:[''],
        inpQType:[''],
        inpQSubType:[''],
        inpSkillType:[''],
        inpDifficultyLevel:['']
      });
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
      if(this.questionTemplateGeneratorForm.value.inpClass == cls.class_name)
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
          console.log(this.difficultyLevel);
        }
      },
    error => {
      console.log(error);
    }
    );
  }

  generateExcelSheet()
  {
    console.log("In function");
    let board_id:string = this.questionTemplateGeneratorForm.value.inpBoard;
    let class_id:string = this.questionTemplateGeneratorForm.value.inpClass;
    let sub_id:string = this.questionTemplateGeneratorForm.value.inpSubject;
    let topic_id:string = this.questionTemplateGeneratorForm.value.inpTopic;
    let st_id:string = this.questionTemplateGeneratorForm.value.inpQSubType;
    let qt_id:string = this.questionTemplateGeneratorForm.value.inpQType;
    let qst_id:string = this.questionTemplateGeneratorForm.value.inpQSubType;
    let skill_id:string = this.questionTemplateGeneratorForm.value.inpSkillType;
    let dl_id:string = this.questionTemplateGeneratorForm.value.inpDifficultyLevel;
    
    this.dataService.generateExcelFile( board_id, class_id, sub_id, topic_id, st_id, qt_id, qst_id, skill_id, dl_id).subscribe(
      result => {
        console.log(result);
      },
    error => {
      console.log(error);
    }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulkUploadPage');
    this.getAllBoard();
    this.getAllClass();
    this.getQuestionType();
  }
  logForm()
  {
    console.log(this.questionTemplateGeneratorForm.value);
  }

  fileChoose(){
    this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
  }

}
