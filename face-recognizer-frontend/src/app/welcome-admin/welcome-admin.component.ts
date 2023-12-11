import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tr } from 'date-fns/locale';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit{
  arr: string = history.state.data;
  bell_icon="&#x1F514"
  bell="../assets/bell_icon1.jpg"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log("this is in welcome admin page",this.arr[0][0])
  }

  onsave(){

  this.router.navigate(['/notification']);
  }
  onsave1(){

    this.router.navigate(['/login']);
    }
    onsave2(){

      this.router.navigate(['/user']);
      }
      onsave3(){

        this.router.navigate(['/list_attendance']);
        }
        onsave4(){

          this.router.navigate(['/attendance-management']);
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

