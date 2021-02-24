import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hb3-select-paper',
  templateUrl: './select-paper.component.html',
  styleUrls: ['./select-paper.component.css']
})
export class SelectPaperComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnHistoryClick=  () => {
    this.router.navigateByUrl('/history');
};


}
