import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef) {}

  scrollToSection(sectionId: string): void {
    const section = this.elementRef.nativeElement.querySelector(
      `#${sectionId}`
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
