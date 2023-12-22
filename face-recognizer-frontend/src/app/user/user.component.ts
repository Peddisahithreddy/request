import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bell="../assets/bell.jpeg"
  boy_icon="../assets/user-icon.png"
  employees: any = [];
  emp_ids: number[] =[];
  details: boolean = false;
  constructor(private router: Router,private employeeService: EmployeeserviceService) {}
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((response) =>{
      this.employees = response


    })
  }

  onsave() {
    this.employeeService.getAllEmployee().subscribe((response) => {
      for (let i = 0; i <response.length; i++){
        this.employeeService.getEmployeeById(response[i].emp_id).subscribe((response) => {
          console.log(response)
        })
      }
      //this.employeeService.getEmployeeById()
    })
    // Perform your authentication logic here.
    // For simplicity, let's assume validation always succeeds.
    // In a real application, you'd check user credentials against a backend service.

    // Redirect to the home page upon successful login.
    this.router.navigate(['/details'],{state:{data:this.emp_ids}});
  }
  onsave1(){

    this.router.navigate(['/add-user']);
    }
    onsave2(){

      this.router.navigate(['/login']);
      }
    showNotification() {
      this.details = !this.details
      if (this.details == true)
      {
        const admindetails = document.getElementById('admin-details') as HTMLDivElement;
        admindetails.style.display = 'block';
      }
      else{
        this.hideNotification();
      }

    }
   hideNotification() {
     // Hide the notification box
     const admindetails = document.getElementById('admin-details') as HTMLDivElement;
     admindetails.style.display = 'none';
   }


}
