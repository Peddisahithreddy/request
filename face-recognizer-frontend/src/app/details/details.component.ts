import { Component,OnInit,inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  route: ActivatedRoute = inject(ActivatedRoute);
    employeeid = -1;
    constructor(private router: Router,private employeeService: EmployeeserviceService) {
        this.employeeid = Number(this.route.snapshot.params['emp_id']);
    }
  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.employeeid).subscribe((response) => {console.log(response.emp_name.emp_name)})
  }
  // ngOnInit(): void {
  //   console.log("emp_id is : ",this.employeeid)
  // }
  onsave(){

  this.router.navigate(['/login']);
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
