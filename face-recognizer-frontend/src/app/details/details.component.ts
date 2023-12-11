import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(history.state.data)
  }
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
