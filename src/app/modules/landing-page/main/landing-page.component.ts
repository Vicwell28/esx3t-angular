import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(
    private elementRef: ElementRef,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.isAuth =
      this.localStorageService.getItem('token') == null ? false : true;
  }

  isAuth: boolean = false;

  stroyProducts : {title: string, content: string, id: number}[] = 
  [
    {
      id: 1,
      title: "Title title", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut?"
    },
    {
      id: 2,
      title: "Title", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut?"
    },
    {
      id: 3,
      title: "Title title", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut?"
    },
    {
      id: 4,
      title: "Title title", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut? "
    },
    {
      id: 5,
      title: "Title", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatibus eveniet, dolores cum eos dolorem incidunt nulla impedit nobis minus autem id. Similique perferendis incidunt dolorem consequatur architecto, magni ut?"
    },
  ]

  scrollToSection(sectionId: string): void {
    const section = this.elementRef.nativeElement.querySelector(
      `#${sectionId}`
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}
