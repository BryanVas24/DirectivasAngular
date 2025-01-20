import { Component } from '@angular/core';

import { SafeLinkdirective } from '../safe-link.directive';
@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SafeLinkdirective],
})
export class LearningResourcesComponent {}
