import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../Student';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() isInput = false;
  @Input() studentInfo: Student = {firstName: '', lastName: '', surName: '', date: '', performance: ''};

  constructor() {

  }

  ngOnInit() {
  }

  editStudent(): void {
    this.isInput = !this.isInput;
  }

  removeStudent(): void {
    console.log('removed');
  }
}
