import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hb3-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})
export class ShowHistoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnGoSelectClick=  () => {
    this.router.navigateByUrl('/select');
};

}
