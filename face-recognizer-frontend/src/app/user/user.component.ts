import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bell="../assets/bell.jpeg"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  users!: string[];
  userid: number = history.state.data
  constructor(private router: Router,private userService: UserserviceService) {}
  ngOnInit(): void {
    console.log("data is : ",this.userid)

    this.userService.getAllUsers().subscribe((data) => {
      this.users = []

      // this.users= data[0].username
      // console.log(data)
    for(let i = 0; i<data.length; i++){

      this.users.push(data[i].username);
      }
  },)}

  onsave() {
    // Perform your authentication logic here.
    // For simplicity, let's assume validation always succeeds.
    // In a real application, you'd check user credentials against a backend service.

    // Redirect to the home page upon successful login.
    this.router.navigate(['/details']);
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
