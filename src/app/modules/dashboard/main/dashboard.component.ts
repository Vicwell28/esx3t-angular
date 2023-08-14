import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IViewCategoryRole } from 'src/app/core/interfaces/views/IViewRole';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { RoleViewsService } from 'src/app/core/services/views/role-views.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  viewsCategories?: IViewCategoryRole[];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private elementRef: ElementRef,
    private RoleViewsService: RoleViewsService
  ) {
    this.isAuth =
      this.localStorageService.getItem('token') == null ? false : true;
  }

  isAuth: boolean = false;


  ngOnInit(): void {
    this.RoleViewsService.indexRoleView().subscribe({
      next: (value) => {
        console.log(value);

        this.viewsCategories = value.data as IViewCategoryRole[];
      },
      complete: () => {
        console.log('Complete');

        console.log(this.viewsCategories);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  home() { this.router.navigate(['/']);}

  sign() { this.router.navigate(['/sign-in']);}

}