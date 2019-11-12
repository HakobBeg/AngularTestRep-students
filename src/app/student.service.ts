import {Injectable} from '@angular/core';
import {Student} from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  STUDENTS: any = {...localStorage};

  constructor() {

  }


}
