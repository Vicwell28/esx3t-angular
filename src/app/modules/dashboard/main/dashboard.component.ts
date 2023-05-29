import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private localStorageService: LocalStorageService, private router: Router){}

  profile() {

  }

  singOut() {
    console.log("sign-out")
    this.localStorageService.removeItem('token')
    this.localStorageService.removeItem('role')
    this.router.navigate(['/sign-in'])
  }

}
