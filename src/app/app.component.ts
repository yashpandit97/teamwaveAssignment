import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teamWave';
  allFieldsAndParameters: any;
  p: number = 1;
  searchKey: any;

  constructor(private dataService: DataService){}

  async ngOnInit() {
    this.dataService.getAllFieldsAndParameters().subscribe(data => {
      if(data)
      {
        this.allFieldsAndParameters = data?.body;
        console.log(this.allFieldsAndParameters);
      }
    })
  }
}
