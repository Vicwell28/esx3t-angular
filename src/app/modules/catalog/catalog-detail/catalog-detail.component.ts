import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css'],
})
export class CatalogDetailComponent {

  product!: IProduct

  constructor(private route: ActivatedRoute) {
    this.questions = Array.from({ length: 10 }, (_, index) => {
      return {
        question: `Texto ${index}`,
        answers: Array.from(
          { length: Math.floor(Math.random() * 10) + 1 },
          (_, answerIndex) => {
            return `Answer ${answerIndex}`;
          }
        ),
      };
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(id);

    this.product = this.ProductsList.find((val, idx, obj) => {
      return val.id === id
    })!

    console.log(this.product)
  }

  questions: { question: string; answers: string[] }[];

  generateRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }

  getProducts() {
    let ProductsList = this.generateRange(0, 99).map(() => { return this.shuffleArray(this.ProductsList).at(2) as IProduct })

    this.ProductsList = ProductsList
  }

  shuffleArray(array: IProduct[]): IProduct[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  ProductsList: IProduct[] = [
    {
      id: 1,
      name: "Repetidor / router Wi-Fi, 2,4 GHz y 5 GHz (B/G/N/A/AC), hasta 30 m de cobertura",
      description: "Extiende la cobertura de tu red Wi-Fi para navegar en cualquier parte de tu casa u oficina\n\nRed inalámbrica con cobertura de hasta 30 m en áreas abiertas\n\nAdministración desde tu celular con la app Steren Wi-Fi\n\nBanda dual: 5 GHz y 2,4 GHz AC1200\n\nPara estándares b / g / n / a / ac\n\nSmart Wi-Fi: El repetidor elige la mejor red para transmitir\n\nBeamforming: El repetidor elige el mejor camino para transmitir la señal\n\nControl parental: Controla lo que ven los niños en Internet\n\nRed de invitados: Comparte Wi-Fi fácilmente con otras personas\n\nConexión alámbrica: Tiene 3 puertos LAN Fast Ethernet (Hasta 100 Mbps",
      price: "$799.00",
      descount: 10,
      pricedescount: "599.00",
      imagePath: "/assets/Repetidor.png"
    },
    {
      id: 2,
      name: "Alexa ECHO DOT 5a Gen negra más foco Wi-Fi (ECHO DOT 5 GEN NE / SHOME-120)",
      description: "El Echo Dot con en el mejor sonido hasta la fecha: Disfruta de una experiencia de audio superior a los Echo Dot con Alexa anteriores, en la que obtendrás voces más nítidas, graves más profundos y sonido vibrante en cualquier habitación.\n\nTu música y contenido favoritos: Reproduce música, audiolibros y podcast en Amazon Music*, Apple Music*, Spotify* y otros servicios o a través de Bluetooth en tu hogar.\n\nAlexa te ayuda con gusto: Pídele a Alexa que te dé actualizaciones del clima y que ponga timers con tan solo usar la voz. Incluso puedes obtener respuestas a tus preguntas y pedirle chistes. ¿Quieres dormir unos minutos más por la mañana? Toca ligeramente la parte superior del Echo Dot para posponer alarmas.\n\nMantén un ambiente acogedor en tu casa: Controla dispositivos de Casa Inteligente compatibles con la voz y rutinas que activan acciones utilizando los sensores integrados de temperatura interior y movimiento. Crea rutinas para encender automáticamente luces compatibles cuando entres a una habitación o para encender un ventilador si la temperatura interior se eleva más allá de tu zona de confort.\n\nDiseño que protege tu privacidad: Amazon no se dedica a vender tu información personal a terceros. Cuenta con varias capas de controles de privacidad, incluyendo un botón para desactivar los micrófonos.\n\nAprovecha al máximo la vinculación de dispositivos: Llena tu casa con música usando dispositivos Echo compatibles en distintas habitaciones y crea un sistema de cine en casa con Fire TV.",
      price: "$1,498.00",
      descount: 10,
      pricedescount: "$999.00",
      imagePath: "/assets/alexa.png"
    },
    {
      id: 3,
      name: "Alexa ECHO DOT 5a Gen azul más foco Wi-Fi y contacto Wi-Fi (ECHO DOT 5 GEN AZ / SHOME-100 / SHOME-120)",
      description: "El Echo Dot con en el mejor sonido hasta la fecha: Disfruta de una experiencia de audio superior a los Echo Dot con Alexa anteriores, en la que obtendrás voces más nítidas, graves más profundos y sonido vibrante en cualquier habitación.\n\nTu música y contenido favoritos: Reproduce música, audiolibros y podcast en Amazon Music*, Apple Music*, Spotify* y otros servicios o a través de Bluetooth en tu hogar.\n\nAlexa te ayuda con gusto: Pídele a Alexa que te dé actualizaciones del clima y que ponga timers con tan solo usar la voz. Incluso puedes obtener respuestas a tus preguntas y pedirle chistes. ¿Quieres dormir unos minutos más por la mañana? Toca ligeramente la parte superior del Echo Dot para posponer alarmas.\n\nMantén un ambiente acogedor en tu casa: Controla dispositivos de Casa Inteligente compatibles con la voz y rutinas que activan acciones utilizando los sensores integrados de temperatura interior y movimiento. Crea rutinas para encender automáticamente luces compatibles cuando entres a una habitación o para encender un ventilador si la temperatura interior se eleva más allá de tu zona de confort.\n\nDiseño que protege tu privacidad: Amazon no se dedica a vender tu información personal a terceros. Cuenta con varias capas de controles de privacidad, incluyendo un botón para desactivar los micrófonos.\n\nAprovecha al máximo la vinculación de dispositivos: Llena tu casa con música usando dispositivos Echo compatibles en distintas habitaciones y crea un sistema de cine en casa con Fire TV.",
      price: "$1,697.00",
      descount: 10,
      pricedescount: "$1,198.00",
      imagePath: "/assets/alexa2.png"
    },
    {
      id: 4,
      name: "Pantalla inteligente con Alexa y cámara de 2 MPx (2da Gen) más Foco LED Wi-Fi RGB+W multicolor de 10 W más Contacto Wi-Fi (ECHO SHOW 5 BL / SHOME-120 / SHOME-100)    ",
      description: "Planea tu día con Alexa: Establece alarmas y timers, revisa tu calendario o las noticias, haz videollamadas a tus contactos que tengan la app de Alexa o un dispositivo Echo compatible con pantalla y cámara, reproduce música o programas, todo con tu voz.\n\nAgrega Alexa a tu mesita de noche: Comienza el día con tranquilidad con una rutina que enciende las luces compatibles gradualmente. O despierta con la actualización de tus noticias, el pronóstico del clima y tu música favorita.\n\nAdministra tu casa inteligente: Mira lo que sucede en el interior de tu casa cuando estés afuera, con la cámara incorporada. Controla dispositivos compatibles como cámaras, luces y más mediante la pantalla interactiva, tu voz o tu movimiento.\n\nConéctate con videollamadas: Usa la cámara de 2 MP para llamar a amigos y familiares que tengan la app de Alexa o un dispositivo Echo con una pantalla. Haz anuncios a otros dispositivos compatibles en tu casa.\n\nDiviértete: Pídele a Alexa que reproduzca programas de televisión y películas a través de Prime Video y Netflix. O reproduce tu música o podcast favoritos de Amazon Music, Apple Music, Spotify y otros.\n\nPon fotos en la pantalla inteligente: Usa Facebook para convertir tu pantalla de inicio en un marco digital.\n\nDiseñado para proteger tu privacidad: Construido con múltiples filtros de privacidad, incluido un botón para apagar y desconectar el micrófono y cámara, además de una cubierta para la cámara integrada.",
      price: "$2,397.00",
      descount: 10,
      pricedescount: "$2,048.00",
      imagePath: "/assets/pantalla.png"
    },
    {
      id: 5,
      name: "Cámara de seguridad Wi-Fi* Full HD robotizada con seguidor de movimiento",
      description: "Conexión por Wi-Fi\n\nDescarga nuestra app Steren Home para controlarla\n\nApp disponible en App Store y Google Play\n\nControla y visualiza la grabación desde tu celular\n\nControla con más de 1 celular\n\nTambién visualiza la cámara desde un navegador web\n\nGraba hasta 20 días con microSD de 128 GB. (De venta por separado)\n\nIncorpora micrófono y bocina para escuchar y hablar desde tu celular\n\nVisión nocturna\n\nDetección de movimiento\n\nSeguidor de movimiento.: La cámara realiza un paneo y sigue el recorrido de algo o alguien\n\nFácil configuración\n\nMultivisión: Vincula 2 o más cámaras de este u otros modelos y ve todas en la app Steren Home\n\nÁngulo de visión: 80°",
      price: "$1099.00",
      descount: 10,
      pricedescount: "$799.00",
      imagePath: "/assets/camara.png"
    },
    {
      id: 6,
      name: "Cargador de pilas \"AA y AAA\". Incluye 4 pilas AA",
      description: "Tiene luces LED que te indica que el cargador está en funcionamiento\n\nCompatible con pilas de níquel-metal y níquel-cadmio\n\nTiene clavija abatible y tamaño compacto para guardarlo fáci",
      price: "$599.00",
      descount: 10,
      pricedescount: "$299.00",
      imagePath: "/assets/cargador-rapido.png"
    },
    {
      id: 7,
      name: "Repetidor Wi-Fi* de doble banda 2,4 GHz y 5 GHz (B/G/N/A/AC), hasta 40 m de cobertura",
      description: "Fácil instalación: Conéctalo y configura en 3 pasos desde tu celular o PC\n\nRed inalámbrica con cobertura de hasta 40 m en áreas abiertas\n\nDoble banda AC1200 (2,4 GHz 300 Mbps / 5 GHz 900 Mbps)\n\nFunción de punto de acceso (AP)\n\nIncorpora 1 puertos LAN Fast Ethernet para conectar equipos sin Wi-Fi como PC o Smart TV",
      price: "$1,849.00",
      descount: 10,
      pricedescount: "$849.00",
      imagePath: "/assets/repetidor1.png"
    },
    {
      id: 8,
      name: "Cámara deportiva sumergible 4K Wi-Fi* con doble pantalla",
      description: "Graba en resolución UHD 4K\n\nToma fotografía con resolución de hasta 24 Mpx\n\nPantalla principal de 2” y una frontal de 1,3”\n\nVinculación Wi-Fi con tu celular para controlar todo desde la palma de tu mano\n\nGraba en microSD de hasta 128 GB\n\nBatería recargable para hasta 50 minutos de uso\n\nIncluye carcasa con protección IP67 que la hace sumergible\n\nIncluye accesorios para montarla en casco, moto, parabrisas y más\n\nIncorpora diferentes modos de grabación y fotografía\n\nTiene salida micro HDMI para conectarla a una pantalla",
      price: "$3,290.00",
      descount: 10,
      pricedescount: "$2,290.0",
      imagePath: "/assets/camara-deportiva.png"
    },
    {
      id: 9,
      name: "Bafle de 12\" 2,100 W PMPO profesional Bluetooth*",
      description: "Reproduce graves en frecuencias bajas, así que la música también se siente\n\nIncorpora crossover que asegura excelente definición en agudos y graves\n\nReproductor MP3 por USB o microSD\n\nEntrada 6.3mm para micrófono y AUX RCA para otros reproductores\n\nSalida amplificada para conectar otros amplificadores o más bafles en cascada\n\nDiseño y materiales que hacen que tenga excelente acústica\n\nSu disipador extenso asegura óptima temperatura de operación\n\nAlta durabilidad que lo hace altamente confiable en cualquier evento\n\nIncluye control remoto\n\nDimensiones: 33 cm de frente x 54 cm de alto x 30 cm de profundidad",
      price: "$3,690.00",
      descount: 10,
      pricedescount: "$2,690.00",
      imagePath: "/assets/bocina.png"
    },
    {
      id: 10,
      name: "Antena CPE Wi-Fi de largo alcance 23 dBi 5 GHz, para exterior",
      description: "Su ganancia de 23 dB permite enviar la señal hasta 25 km\n\nOpera en la frecuencia de 5 GHz\n\nTiene tecnología MU-MIMO\n\nIncorpora diferentes modos de configuración\n\nGrado de protecciónIP65 para uso exterior\n\nEs compatible con la tecnología PoE\n\nIMPORTANTE: Para enviar la señal punto a punto son necesarias 2 antenas de este modelo",
      price: "$2,190.00",
      descount: 10,
      pricedescount: "$1,190.00",
      imagePath: "/assets/antena-wifi.png"
    },
  ]
}

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  descount: number;
  pricedescount: string;
  imagePath: string;
}