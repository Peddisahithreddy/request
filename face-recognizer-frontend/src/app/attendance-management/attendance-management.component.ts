import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.css']
})
export class AttendanceManagementComponent {
  name: string = '';
  id!: number;
  status: string = '';
  entry_time!: string;
  message: string ='';
  boy_icon="../assets/user-icon.png"
  constructor(private attendanceService: AttendanceService){}

  onsave(){
    const datajson = {
      emp_id: this.id,
      emp_name: this.name,
      status: this.status,
      entry_time: this.entry_time
    }
    this.attendanceService.post_attendance(datajson).subscribe(response => {
      this.message = response.message
      const message = document.getElementById('message') as HTMLDivElement | null;
        if (message) {
          message.style.display = 'block';
        }
      console.log("response is :",response.message)
    console.log(this.status)})
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
