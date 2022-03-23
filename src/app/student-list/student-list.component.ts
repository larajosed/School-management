import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  list: Student[]

  constructor(private studentService: StudentService) {
    this.list = []
  }

  ngOnInit(): void {
    this.studentService.getAll().then((res) => {
      this.list = res.data
    })
  }

}
