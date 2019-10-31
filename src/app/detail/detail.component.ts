import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
