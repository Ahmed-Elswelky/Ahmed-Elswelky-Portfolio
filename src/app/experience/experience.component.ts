import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";
import experiences from "../../../src/models/experience.json"
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: any[] = experiences;

}
