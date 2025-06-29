import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgbModule,
    NgFor,
  ],
  providers: [ NgbCarouselConfig ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  counter = 0;
  slideWidth = 0;

  constructor(private renderer: Renderer2, config: NgbCarouselConfig) {
    //  values of carousel  //
    config.interval = 2000; // images change in 2sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  public images = [

    '../../assets/favicon.jpg',
   
    '../../assets/favicon.jpg',
   
    '../../assets/favicon.jpg',
   
    '../../assets/favicon.jpg'
   
    ];
   
   title = [ 'Slide-1','Slide-2','Slide-3','Slide-4' ];
   

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
    if (this.counter >= 4 - 1) return;
    this.counter++;
    this.moveCarousel();
  }

  moveCarousel(): void {
    const carouselContainer = document.querySelector('.carousel-container') as HTMLElement;
    carouselContainer.style.transform = `translateX(-${this.counter * this.slideWidth}px)`;
  }
}
