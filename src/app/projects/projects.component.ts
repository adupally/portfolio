import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class ProjectsComponent {


  sliderItems: any[] = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      languages: ['Angular', 'HTML', 'CSS'],
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      languages: ['React', 'JavaScript', 'CSS'],
    },
    // Add more projects as needed
  ];

  currentSlide: number = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.sliderItems.length) % this.sliderItems.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderItems.length;
  }
}
