import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IViewCategory } from 'src/app/core/interfaces/views/IViewCategory';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ViewCategoriesService } from 'src/app/core/services/views/view-categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  viewsCategories?: IViewCategory[] 

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private elementRef: ElementRef, 
    private viewCategoriesService: ViewCategoriesService
  ) {}

  ngOnInit(): void {
    this.viewCategoriesService.indexViewCategory().subscribe({
      next: (value) => {
        console.log(value); 

        this.viewsCategories = value.data as IViewCategory[]
      }, 
      complete: () => {
        console.log("Complete");

        console.log(this.viewsCategories);
      }, 
      error: (err) => {
        console.log(err);
      }
    })
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
}



// this.viewCategoriesService.indexViewCategory().subscribe({
//   next: (value) => {

//   }, 
//   complete: () => {

//   }, 
//   error: (err) => {
    
//   }
// })