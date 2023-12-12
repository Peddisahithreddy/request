import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { UserserviceService } from '../userservice.service';
import { Observable } from 'rxjs';
import { MarkleaveserviceService } from '../markleaveservice.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  users: string[] =[];

  username!: string;
  result!: string;
  //id: number = history.state.data[0];
  //email: string = history.state.data[2];
  constructor(private router: Router,private markleaveService: MarkleaveserviceService,private userService: UserserviceService) {}
  ngOnInit(): void {
    this.markleaveService.getRequest().subscribe((response) =>
    {

      for(let i = 0; i<response.requests.length; i++){
        console.log(response.requests[i].emp_name)
        this.users.push(response.requests[i].emp_name);
        }
      // this.username = this.users,
    //  console.log(response.requests[0].emp_name)
    },


    )
    console.log("this is in users page response",this.users)
    }


  onsave(){


  this.router.navigate(['/user']);
  }
  onsave1(){

    this.router.navigate(['/attendance']);
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
