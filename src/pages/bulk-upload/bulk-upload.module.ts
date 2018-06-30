import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkUploadPage } from './bulk-upload';

@NgModule({
  declarations: [
    BulkUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkUploadPage),
  ],
})
export class BulkUploadPageModule {}
