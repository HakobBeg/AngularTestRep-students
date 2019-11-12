import {Component, OnInit} from '@angular/core';
import {STUDENTS} from '../students';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  students = STUDENTS;

  constructor() {
  }

  ngOnInit() {
  }

}
