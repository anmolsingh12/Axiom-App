import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-bulk-upload',
  templateUrl: 'bulk-upload.html',
})
export class BulkUploadPage {

  board:Array<{name:string, alias:string }>;
  class:Array<{name:string, value:string}>;
  subject:Array<{name:string}>;
  topic:Array<{name:string}>;
  sub_topic:Array<{name:string}>;
  qSubType:Array<{name:any}>;

  private questionTemplateGeneratorForm:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser, private formBuilder: FormBuilder) {
    
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulkUploadPage');
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
