import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mark-attendance-form',
  templateUrl: './mark-attendance-form.component.html',
  styleUrls: ['./mark-attendance-form.component.css']
})
export class MarkAttendanceFormComponent {
  username!: string;
  userId!: number;
  constructor(private router: Router, private attendanceService: AttendanceService) {}
  onSubmit(){
    const jsonData = {
      "emp_id": this.userId,
      "emp_name": this.username
    }
    this.attendanceService.post_attendance(jsonData).subscribe(response => {console.log("response is :",response)})


    this.router.navigate(['/attendance']);
    }
    onsave1(){

      this.router.navigate(['/face-recognised']);
      }

}
