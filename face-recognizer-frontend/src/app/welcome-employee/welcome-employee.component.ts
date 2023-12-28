import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent {
  boy_icon="../assets/user-icon.png"
  username!: string
  user_id!: string
  emp_name!: string
  emp_id!: number
  email: string = history.state.data[4]


  constructor(private router: Router,private employeeServie: EmployeeserviceService) {}
  users: number = history.state.data[0][1]
  result: [] = history.state.data


  ngOnInit(): void {
    this.employeeServie.getEmployeeById(this.users).subscribe((data) =>{

      this.emp_name = data.emp_name.emp_name
      this.emp_id = data.emp_name.emp_id
      console.log(this.result)


    })
     }

  onsave2(){
    console.log("this is state data",this.users)
    this.router.navigate(['/attendance-calendar'],{state:{data:this.result}});
  //this.router.navigate(['/notification']);
  }
  onsave3(){
    this.router.navigate(['/mark-leave'],{state:{data:this.result}})
  }
  onsave4(){
    this.router.navigate(['/regularize-attendance'],{state:{data:this.result}})
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
