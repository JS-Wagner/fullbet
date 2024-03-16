import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    NgbModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isCollapsed: boolean = false;

  constructor() { }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 450) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  onResize(event: Event) {
    this.checkScreenSize();
  }
}
