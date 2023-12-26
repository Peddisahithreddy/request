import { Component, OnInit } from '@angular/core';
// import { CalendarEvent, CalendarView } from 'angular-calendar/modules/calendar.module';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { EmployeeserviceService } from '../employeeservice.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.css']
})
export class AttendanceCalendarComponent implements OnInit{
  boy_icon="../assets/user-icon.png"
  emp: number = history.state.data;
  emp_name!: string;
  attendances: any = []


  constructor(private employeeService: EmployeeserviceService,private attendanceService: AttendanceService){}
  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.emp).subscribe((data) => {
      this.emp_name = data.emp_name.emp_name
    },)
    this.attendanceService.get_week_attendance().subscribe((response) => {
      console.log(response)
      this.attendances = response
    })

}
}
