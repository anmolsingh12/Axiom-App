import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewAddedQuestionsPage } from './review-added-questions';

@NgModule({
  declarations: [
    ReviewAddedQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewAddedQuestionsPage),
  ],
})
export class ReviewAddedQuestionsPageModule {}
