import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { history_data } from './history-data';

@Component({
  selector: 'hb3-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})

export class ShowHistoryComponent implements OnInit {
 
  paper!: string;
  paper_list: history_data[] =[];
  displayedColumns: string[] = ['date', 'value'];

  constructor(private route: Router, private aroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
   this.aroute
    .queryParams
    .subscribe(params => {
      this.paper = params['paper'];

      this.http.get('assets/paper-history.txt', {responseType: 'text'})
      .subscribe(data => { 

        for (const line of data.split(/[\r\n]+/)){
          if(line.substring(10, 15) == this.paper)
          {
            this.paper_list.push(new history_data(line.substring(0, 10),line.substring(15, 20)));  
          }
        }
        this.paper_list = Array.from(new Set(this.paper_list));
      });
    });
  }

  btnGoSelectClick=  () => {
    this.route.navigateByUrl('/select');
};

}
