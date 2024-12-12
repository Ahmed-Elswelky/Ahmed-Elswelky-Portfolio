import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import testimonials from "../../../src/models/Testimonials.json"


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MdbCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: any[] = testimonials;

  getStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < Math.floor(rating));  // Full stars
    }
    return stars;
  }
}
