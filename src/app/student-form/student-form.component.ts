import { Component, getNgModuleById, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: Student;

  constructor(private studentService: StudentService,
    private router: Router,
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute) {
    this.student = new Student();
  }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params["id"];
    console.log(id);

    if (id) {
      this.studentService.getById(id).then(res => {
        this.student = res.data
      })
    }

  }

  onClick() {
    this.studentService.add(this.student).then(res => {
      if (res.error) {
        const modal = this.modalService.open(ModalComponent)
        modal.componentInstance.title = "Error";
        modal.componentInstance.content = "No se ha podido guardar con éxito. Intentelo de nuevo mas tarde.";
      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.title = "Guardado correctamente";
        modal.componentInstance.content = "Se ha guardado con éxito";
        modal.result.then(result => {
          this.router.navigate(['/student/list'])
        })
      }


    })
  }
}
