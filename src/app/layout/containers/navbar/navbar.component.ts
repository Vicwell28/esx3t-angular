import { Component, ElementRef, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  @Input() handleClick?: Function

  constructor(
    private elementRef: ElementRef,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    let token = this.localStorageService.getItem('token');

    this.isAuth = token == null ? false : true;

    console.log(`this is the token ${this.isAuth}`);
  }

  home() { this.router.navigate(['/']);}

  sign() { this.router.navigate(['/sign-in']);}

  isAuth: boolean = false;

  profile() {this.router.navigateByUrl(`Profile`);}

  singOut() {
    console.log('sign-out');
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('role');
    this.router.navigate(['/sign-in']);
  }

  scrollToSection(sectionId: string): void {
    this.router.navigateByUrl(sectionId)
  }
}
