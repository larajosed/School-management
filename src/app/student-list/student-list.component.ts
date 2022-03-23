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
    this.list = [{ "idStudent": 1, "Course": "1", "email": "rafaelordonezmolina@gmail.com", "Full_Name": "Rafael Ordonez" }, { "idStudent": 3, "Course": "1", "email": "rafa@gmail.com", "Full_Name": "Rafa" }]
    /*  this.studentService.getAll().then((res) => {
       this.list = res.data
     }) */
  }

  onClick(id: any) {
    //this.studentService.delete(id).then(res => {
    var filteredStudent = this.list.filter(student => {
      return student.idStudent != id;
    });
    this.list = filteredStudent;
    //})
  }

}
