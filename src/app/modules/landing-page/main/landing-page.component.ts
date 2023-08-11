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
      title: "Mantén tus Puertas y Ventanas Seguras", 
      content: "Cerrar correctamente puertas y ventanas no es solo un acto rutinario, sino una primera línea de defensa vital. Antes de abandonar tu hogar o al retirarte por la noche, asegúrate de que todas las entradas estén cerradas y aseguradas. Considera la posibilidad de instalar cerraduras inteligentes o reforzar las cerraduras existentes para una protección adicional.      "
    },
    {
      id: 2,
      title: "Iluminación Efectiva", 
      content: "La iluminación adecuada puede ahuyentar a los intrusos y proporcionarte una mayor sensación de seguridad. Opta por luces exteriores con sensores de movimiento que se activan automáticamente cuando alguien se acerca. Las áreas como entradas, pasillos y patios traseros se benefician especialmente de una iluminación inteligente.      "
    },
    {
      id: 3,
      title: "Redes WiFi Seguras", 
      content: "Tu red WiFi es un punto vulnerable si no está bien protegida. Asegúrate de establecer una contraseña fuerte y utiliza cifrado WPA3 si está disponible. Evita utilizar nombres de redes que revelen información personal. El acceso no autorizado a tu red puede exponer tus dispositivos conectados y la información personal.      "
    },
    {
      id: 4,
      title: "Cámaras de Vigilancia Estratégicas", 
      content: "Las cámaras de seguridad son más que una disuasión visual. Coloca cámaras en lugares estratégicos que cubran áreas sensibles como entradas, pasillos y puntos ciegos. Las cámaras visibles alertan a los posibles intrusos, mientras que las cámaras ocultas capturan detalles esenciales.      "
    },
    {
      id: 5,
      title: "Mantén tus Dispositivos Actualizados", 
      content: "Mantener tus sistemas de seguridad actualizados es esencial para garantizar su eficacia. Las actualizaciones a menudo incluyen correcciones de seguridad cruciales. Si estás utilizando sistemas conectados a la nube, asegúrate de que todas las aplicaciones y firmware estén actualizados regularmente.      "
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
