import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  profile() {
    this.router.navigateByUrl(`Profile`);
  }

  singOut() {
    console.log('sign-out');
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('role');
    this.router.navigate(['/sign-in']);
  }

  scrollToSection(sectionId: string): void {
    let section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);

    console.log(this);
    console.log(this.elementRef);
    console.log(this.elementRef.nativeElement);
    console.log(`Entro y este es el valor ${section}`);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
