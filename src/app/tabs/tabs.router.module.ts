import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'rank',
        children: [
          {
            path: '',
            loadChildren: '../rank/rank.module#RankPageModule'
          }
        ]
      },
      {
        path: 'music',
        children: [
          {
            path: '',
            loadChildren: '../music/music.module#MusicPageModule'
          }
        ]
      },
      {
        path: 'mv',
        children:[
          { path: '', loadChildren: '../mv/mv.module#MvPageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
