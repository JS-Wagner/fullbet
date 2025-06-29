import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    event.preventDefault(); // Prevenir el comportamiento de desplazamiento predeterminado

    // Determinar la dirección del scroll
    const deltaY = event.deltaY;

    // Obtener el elemento siguiente o anterior
    const nextElement = deltaY > 0 ? document.getElementById('section2') : document.getElementById('section1');

    // Desplazar suavemente al siguiente o anterior elemento si existe
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

