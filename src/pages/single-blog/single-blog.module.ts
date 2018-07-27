import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleBlogPage } from './single-blog';

@NgModule({
  declarations: [
    SingleBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleBlogPage),
  ],
})
export class SingleBlogPageModule {}
