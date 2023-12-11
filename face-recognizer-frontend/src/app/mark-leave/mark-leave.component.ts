import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { MarkleaveserviceService } from '../markleaveservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';


@Component({
  selector: 'app-mark-leave',
  templateUrl: './mark-leave.component.html',
  styleUrls: ['./mark-leave.component.css']
})
export class MarkLeaveComponent implements OnInit {
  empId: number = history.state.data[1];
  empName: string = history.state.data[2];
  email: string = history.state.data[6];
  startDate!: string;
  endDate!: string;
  leaveForm: FormGroup;
  selectedLevel!: string;
  constructor(private http:HttpClient,private fb: FormBuilder,
    private markleaveService: MarkleaveserviceService,private employeeService: EmployeeserviceService){
    this.leaveForm = this.fb.group({
      emp_id: [this.empId,Validators.required],
      emp_name: [this.empName,Validators.required],
      approved_by:[this.empName],
      manager:[this.empName],
      email:[this.email,Validators.required],
      date_from: ['', Validators.required],
      date_to: [''],

      request_type: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.empId).subscribe((data) =>

    {this.empId = data.emp_name.emp_id,
      this.empName = data.emp_name.emp_name,
      this.email = data.emp_name.email,
      console.log(this.empId,this.empName),
    console.log(history.state.data),
  console.log(data.emp_name.email)});
  }


  // ngOnInit(): void {
  //   this.getEmployeeInfo();
  // }
  // getEmployeeInfo(): void{
  //   const apiUrl = 'http://127.0.0.1:5000/employees/<int:emp_id>';
  //   this.http.get(apiUrl).subscribe(
  //     (response: any) => {
  //       // Handle the successful response here
  //       this.empId = response.emp_id;
  //       this.empName = response.emp_name;
  //       console.log('Employee info:', this.empId, this.empName);
  //     },)
  // }


  onsave(): void{
    if (this.empId && this.empName) {
      const formData = this.leaveForm.value;
      const result = this.selectedLevel
      console.log(result)
      const requestTypeList = this.data.map(type => type.name);

      const datajson = {
        emp_id: this.empId,
        approved_by:this.empName,
        emp_name: this.empName,
        date_from: this.startDate,
        date_to: this.endDate,
        request_type: this.selectedLevel.toString() || '',
        email:this.email,
        manager:this.empName
      };

      this.markleaveService.addRequest(datajson).subscribe((response) => {
        console.log('Request added successfully:', response);
        const responseDataWithRequestType = {
          ...response,
          request_type: this.selectedLevel
        };

        console.log('Response with Request Type:', responseDataWithRequestType);
      });
      }
    // const requestData = {
    //   request_id: 1, /* assign a value or retrieve it from your form data */
    //   // emp_id: data['emp_id'],
    //   // emp_name: data['emp_name'],
    // }
    // this.markleaveService.addRequest(formData).subscribe((response) =>
    // {console.log('Request added successfully:',response)})
  }
  // onsave(data:any):void{

  //   this.markleaveService.addRequest(data).subscribe(
  //     response => {
  //       console.log('Request added successfully:', response);
  //       //this.router.navigate(['/welcome-admin']);
  //     },)
  //   }

  data = [
      {id: 0, name: "Casual leave"},
      {id: 1, name: "Sick leave"}
  ];
  // datajson = JSON.stringify(this.data)
  minDate: string = new Date().toISOString().split('T')[0];

}
