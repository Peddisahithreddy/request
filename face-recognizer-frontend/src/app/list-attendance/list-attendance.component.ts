import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-list-attendance',
  templateUrl: './list-attendance.component.html',
  styleUrls: ['./list-attendance.component.css']
})
export class ListAttendanceComponent implements OnInit{
  boy_icon="../assets/user-icon.png"
  attendance: string[] =[]

  constructor(private router: Router, private attendanceService: AttendanceService) {}
  ngOnInit(): void {
    this.attendanceService.get_attendance().subscribe((response) =>
    {for (let i=0; i<response.length; i++){
      this.attendance.push(response[i].emp_name)
      console.log(response[i].emp_name)
    }},)
  }
  onsave(){

  this.router.navigate(['/calendar-details']);
  }
  showadmindetails(){
    // Show the notification box
    const admindetails = document.getElementById('admin-details') as HTMLDivElement;
    admindetails.style.display = 'block';

 }
 hideNotification() {
   // Hide the notification box
   const admindetails = document.getElementById('admin-details') as HTMLDivElement;
   admindetails.style.display = 'none';
 }
}
