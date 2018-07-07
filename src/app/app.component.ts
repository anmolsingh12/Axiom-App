import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import {PopoverComponent } from '../components/popover/popover';
import {AddQuestionPage} from '../pages/add-question/add-question';
import {QuestionBankPage} from '../pages/question-bank/question-bank';
import {BulkUploadPage} from '../pages/bulk-upload/bulk-upload';
import { ReviewAddedQuestionsPage } from '../pages/review-added-questions/review-added-questions';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  shownGroup:any;
  rootPage: any = HomePage;
  pages:Array<{title:string, child:child[]}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public popoverCtrl: PopoverController) {
    this.initializeApp();

    this.pages = [
      { title: 'Question Management',
          child: [{name:'Question Bank', component:QuestionBankPage},
                  {name:'Bulk upload', component:BulkUploadPage},
                   {name:'Add Question', component:AddQuestionPage},
                   {name:'Review', component:ReviewAddedQuestionsPage }]
      },
      
      { title: 'Question Paper', 
          child: [{name:'Question Template', component:null},
                  {name:'Template Review', component:null},
                  {name:'Template list', component:null},
                  {name:'Question Paper Setup', component:null},
                  {name:'Question Paper Review',component:null},
                  {name:'Question Paper List', component:null}]
      },

      { title: 'E-Assesment',
          child : [{name:'Exam Setup', component:null},
                  {name:'Scheduled Exam', component:null}]
      },
      
      { title: 'E-Evaluation',
          child: [{name:'Concluded E-Assesment', component:null}] },
      
      { title: 'Report',
          child: [{name:'Test Report',component:null},
                  {name:'Performance Analysis', component:null},
                  {name:'Overall Performance', component:null},
                  {name:'Class Performance', component:null}]
      },
      
      { title: 'Manage Users',
          child: [{name:'User Management', component:null},
                  {name:'Teacher Management', component:null},
                  {name:'Student Management', component:null},
                  {name:'Parent Management', component:null}] 
      },

      { title: 'Setup',
          child:[{name:'System Info', component:null}]
      },

      { title: 'Notification',
          child:[{name:'Email', component:null},
                  {name:'SMS', component:null}]
      }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(p) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(p.component);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

  openHome()
  {
    this.nav.setRoot(HomePage);
  }
}

export interface child {
  name:string;
  component:any;
}
