import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import { ModalPageModule } from '../modal/modal.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // ModalPageModule,//懒加载?
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage],
  // exports: [
  //   HomePage
  // ]
})
export class HomePageModule {}
