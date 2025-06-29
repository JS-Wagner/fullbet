import { Component, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('section2Title', { static: false }) section2Title!: ElementRef;
  @ViewChild('bannerZeusImg', { static: false }) bannerZeusImg!: ElementRef;

  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    // Solo activar en pantallas grandes
    if (window.innerWidth <= 768) return;

    event.preventDefault();

    const deltaY = event.deltaY;
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    if (deltaY > 0) {
      // Scroll hacia abajo
      if (section2) {
        section2.scrollIntoView({ behavior: 'smooth' });
        // Espera a que termine el scroll y luego baja hasta el final
        setTimeout(() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 600); // Ajusta el tiempo si tu scroll es más lento
      }
    } else {
      // Scroll hacia arriba
      if (section1) {
        section1.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  ngAfterViewInit() {
    const h1 = this.section2Title?.nativeElement as HTMLElement;
    const img = this.bannerZeusImg?.nativeElement as HTMLImageElement;
    if (h1 && img) {
      img.style.width = `${h1.offsetWidth}px`;
    }
  }
}

