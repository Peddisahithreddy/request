import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { DialogService } from '../dialog.service';
import { tap } from 'rxjs';

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
  successMessage$ = this.dialogService.successMessageAction$;
  errorMessage$ = this.dialogService.errorMessageAction$;
  boy_icon="../assets/user-icon.png"
  constructor(private attendanceService: AttendanceService,private dialogService: DialogService){}

  onsave(){
    const datajson = {
      emp_id: this.id,
      emp_name: this.name,
      status: this.status,
      entry_time: this.entry_time
    }
    this.attendanceService.post_attendance(datajson).pipe(
      tap(response => {
      this.message = response.message;
      this.dialogService.setSuccessMessage(this.message);
      const message = document.getElementById('message') as HTMLDivElement | null;
        if (message) {
          message.style.display = 'block';
        }
      console.log("response is :",response.message)
    console.log(this.status);
  })
    ).subscribe();
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
