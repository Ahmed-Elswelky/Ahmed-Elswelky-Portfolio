import { Component } from '@angular/core';
import { WorkCardComponent } from "../work-card/work-card.component";
import works from "../../../src/models/works.json"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkCardComponent, CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  works: any[] = works
}
