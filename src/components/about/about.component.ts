import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  counter = 0;
  slideWidth = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkDocument();
  }

  checkDocument(): void {
    if (typeof document !== 'undefined') {
      const slideElement = document.querySelector('.carousel-slide');
      this.slideWidth = slideElement?.clientWidth || 0;
    }
  }
  
  prevSlide(): void {
    if (this.counter <= 0) return;
    this.counter--;
    this.moveCarousel();
  }

  nextSlide(): void {
    if (this.counter >= 4 - 1) return; // Aquí reemplaza '3' por el número total de slides
    this.counter++;
    this.moveCarousel();
  }

  moveCarousel(): void {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    carouselContainer.style.transform = `translateX(-${this.counter * this.slideWidth}px)`;
  }
}
