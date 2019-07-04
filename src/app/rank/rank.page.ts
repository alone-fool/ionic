import { Component, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-rank',
  templateUrl: 'rank.page.html',
  styleUrls: ['rank.page.scss'],
  providers:[
    RestService
  ]
})
export class RankPage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  rankList: [];

  constructor(
    private restService: RestService
  ) {}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.restService.getRank()
      .subscribe(data => {
        // console.log(data['playlist'].tracks);
        this.rankList = data['playlist'].tracks;
        // console.log(this.rankList);
      })
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if(DataCue.length == 200){
        event.target.disabled = true;
      }
    },500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
