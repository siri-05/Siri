import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students!: Student[];
  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }
  getStudent(id: number) {
    this.router.navigate(['/student-details', id]);
  }
  updateStudent(id: number) {
    this.router.navigate(['/create-details', id]);
  }
  deleteStudent(id: number) {
    if (confirm("Do you wnat to delete the student " + id) == true) {
      this.studentService.deleteStudent(id).subscribe(data => {
        alert("Student " + id + " successfully deleted!!");
        this.getStudents();
      });
    }
  }
}
