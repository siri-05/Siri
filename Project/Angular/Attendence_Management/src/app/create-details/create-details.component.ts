import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: ['./create-details.component.css']
})
export class CreateDetailsComponent implements OnInit {
  student_ID!: number;
  student: Student = new Student();
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {}

  student_Form: any;
  ngOnInit(): void {
    this.student_ID=this.route.snapshot.params['student_ID'];
    this.studentService.getStudentById(this.student_ID).subscribe(data=>{
      this.student=data;
    });
    this.student_Form = new FormGroup({
      admNo: new FormControl(this.student.admission_no, [Validators.required]),
      admDate: new FormControl(this.student.admission_date, [Validators.required]),
      stdId: new FormControl(this.student.student_ID, [Validators.required]),
      gName: new FormControl(this.student.guardianName, [Validators.required, Validators.pattern('^[A-Za-z ]*$')]),
      batch: new FormControl(this.student.batch, [Validators.required]),
      fName: new FormControl(this.student.firstName, [Validators.required, Validators.pattern('^[A-Za-z ]*$')]),
      lName: new FormControl(this.student.lastName, [Validators.required, Validators.pattern('^[A-Za-z ]*$')]),
      dob: new FormControl(this.student.dob, [Validators.required]),
      gender: new FormControl(this.student.gender, [Validators.required]),
      major: new FormControl(this.student.major, [Validators.required]),
      branch: new FormControl(this.student.branch, [Validators.required]),
      mobile: new FormControl(this.student.mobile, [Validators.required, Validators.pattern('[0-9]{10}')]),
      email: new FormControl(this.student.email_ID, [Validators.required, Validators.pattern('[A-Za-z0-9._]+@[a-z0-9]+\.[a-z]{3}')]),
      curAddress: new FormControl(this.student.current_Address, [Validators.required]),
      perAddress: new FormControl(this.student.permanent_Address, [Validators.required]),
      attendence: new FormControl(this.student.attendence),
    });
  }

  get adm_No() {
    return this.student_Form.get('admNo');
  }
  get adm_Date() {
    return this.student_Form.get('admDate');
  }
  get std_Id() {
    return this.student_Form.get('stdId');
  }
  get g_Name() {
    return this.student_Form.get('gName');
  }
  get batch_() {
    return this.student_Form.get('batch');
  }
  get f_Name() {
    return this.student_Form.get('fName');
  }
  get l_Name() {
    return this.student_Form.get('lName');
  }
  get d_o_b() {
    return this.student_Form.get('dob');
  }
  get gender_() {
    return this.student_Form.get('gender');
  }
  get major_() {
    return this.student_Form.get('major');
  }
  get branch_() {
    return this.student_Form.get('branch');
  }
  get mobile_() {
    return this.student_Form.get('mobile');
  }
  get email_() {
    return this.student_Form.get('email');
  }
  get cur_Address() {
    return this.student_Form.get('curAddress');
  }
  get per_Address() {
    return this.student_Form.get('perAddress');
  }
  get attendence_() {
    return this.student_Form.get('attendence');
  }
  
  onSubmit() {
    if (this.student_ID == undefined) {
      this.studentService.createStudent(this.student).subscribe(data => {
        this.gotoStudentList();
      },
        error => console.log(error));
    }
    else {
      this.studentService.updateStudent(this.student_ID, this.student).subscribe(data => {
        this.gotoStudentList();
      },
        error => console.log(error));
    }
  }
  gotoStudentList() {
    this.router.navigate(['/student']);
  }
}
