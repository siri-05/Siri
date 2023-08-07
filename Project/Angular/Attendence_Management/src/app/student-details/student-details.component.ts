import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class StudentDetailsComponent implements OnInit {
  student_ID!:number;
  student!:Student;
  img_src!:String;
  constructor(private route:ActivatedRoute,private studentService:StudentService) {}
  ngOnInit(): void {
    this.student_ID=this.route.snapshot.params['student_ID'];
    this.studentService.getStudentById(this.student_ID).subscribe(data=>{
      this.student=data;
    });
  }
}
