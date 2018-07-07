import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AddQuestionPage} from '../pages/add-question/add-question';
import {QuestionBankPage} from '../pages/question-bank/question-bank';
import {BulkUploadPage} from '../pages/bulk-upload/bulk-upload'
import {ModalPage} from '../pages/modal/modal';
import { ReviewAddedQuestionsPage } from '../pages/review-added-questions/review-added-questions';
import { ReviewObjectiveQuestionPage } from '../pages/review-objective-question/review-objective-question'
import { ReviewSubjectiveQuestionPage } from '../pages/review-subjective-question/review-subjective-question'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PopoverComponent} from '../components/popover/popover';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FileChooser } from '@ionic-native/file-chooser';
import {DataServiceProvider} from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverComponent,
    AddQuestionPage,
    QuestionBankPage,
    BulkUploadPage,
    ModalPage,
    ReviewAddedQuestionsPage,
    ReviewObjectiveQuestionPage,
    ReviewSubjectiveQuestionPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddQuestionPage,
    QuestionBankPage,
    PopoverComponent,
    BulkUploadPage,
    ModalPage,
    ReviewAddedQuestionsPage,
    ReviewObjectiveQuestionPage,
    ReviewSubjectiveQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    
  ]
})
export class AppModule {}
