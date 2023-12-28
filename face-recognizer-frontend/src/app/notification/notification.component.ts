import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { Component,OnInit, inject } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { UserserviceService } from '../userservice.service';
import { Observable,filter } from 'rxjs';
import { MarkleaveserviceService } from '../markleaveservice.service';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  users: string[] =[];
  admin!: string[];
  username!: string;
  result!: string;
  leaves: any = [];
  emp_id!: number;
  //id: number = history.state.data[0];
  //email: string = history.state.data[2];
  route: ActivatedRoute = inject(ActivatedRoute);
  employeeid = '';
  constructor(private router: Router,private employeeService: EmployeeserviceService,
    private markleaveService: MarkleaveserviceService,
    private userService: UserserviceService,
    ) {
      this.employeeid = String(this.route.snapshot.params['employees']);
  }

  ngOnInit(): void {
    console.log(this.employeeid)
    this.markleaveService.getRequest().subscribe((response) => {
        this.leaves = response


      })



    // this.markleaveService.getRequest().subscribe((response) =>
    // {

    //   for(let i = 0; i<response.requests.length; i++){
    //     //console.log(response.requests[i].emp_name)
    //     this.users.push(response.requests[i].emp_name);
    //     console.log("state variable value :",history.state.data)
    //     }
    //   // this.username = this.users,
    // //  console.log(response.requests[0].emp_name)
    // },



  }


  onsave(){
    this.employeeService.getEmployeeById(this.emp_id).subscribe(
      (response) => console.log("response in notification page is :",response))





  this.router.navigate(['/user']);
  }
  onsave1(){

    this.router.navigate(['/attendance']);
    }
    showNotification(){
       // Show the notification box
       const admindetails = document.getElementById('admin-details') as HTMLDivElement;
       admindetails.style.display = 'block';

    }
    onsave2(){}
    hideNotification() {
      // Hide the notification box
      const admindetails = document.getElementById('admin-details') as HTMLDivElement;
      admindetails.style.display = 'none';
    }

}
