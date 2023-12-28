import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FaceNotRecognisedComponent } from './face-not-recognised/face-not-recognised.component';
import { FaceRecognisedComponent } from './face-recognised/face-recognised.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';


import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { WelcomeEmployeeComponent } from './welcome-employee/welcome-employee.component';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component'
// import { FullCalendarModule } from '@fullcalendar/angular';

import { SentRequestComponent } from './sent-request/sent-request.component';
import { RegularizeAttendanceComponent } from './regularize-attendance/regularize-attendance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { MarkLeaveComponent } from './mark-leave/mark-leave.component';
import { MarkAttendanceFormComponent } from './mark-attendance-form/mark-attendance-form.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    FaceNotRecognisedComponent,
    FaceRecognisedComponent,
    PopupComponent,
    LoginComponent,
    UserComponent,
    DetailsComponent,
    AddUserComponent,
    WelcomeAdminComponent,
    NotificationComponent,
    ListAttendanceComponent,
    MarkLeaveComponent,

    CalendarDetailsComponent,
          EmployeeLoginComponent,
          WelcomeEmployeeComponent,
          AttendanceCalendarComponent,

          SentRequestComponent,
                      RegularizeAttendanceComponent,
                      AttendanceManagementComponent,
                      MarkLeaveComponent,
                      MarkAttendanceFormComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FullCalendarModule,
    BrowserAnimationsModule,
    CalendarModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
