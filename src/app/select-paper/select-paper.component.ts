import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hb3-select-paper',
  templateUrl: './select-paper.component.html',
  styleUrls: ['./select-paper.component.css']
})
export class SelectPaperComponent implements OnInit {

  paper_list: string[] = [];

  constructor(private router: Router, private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/paper-history.txt', {responseType: 'text'})
        .subscribe(data => { 

          for (const line of data.split(/[\r\n]+/)){
            this.paper_list.push(line.substring(10, 15));
          }
          this.paper_list = Array.from(new Set(this.paper_list));
        });
  }

  btnHistoryClick(paper: string) {

    if (!paper){
      this.snackBar.open('Selecione uma ação', '', {
        duration: 2000
      });
    }
    else
    {
      this.router.navigate(['history'] , { queryParams: { paper }});
    }
  }

}
