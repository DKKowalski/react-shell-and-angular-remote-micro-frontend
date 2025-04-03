import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true,
})
export class LandingComponent {
  title = 'Marketing Micro Frontend';

  constructor() {
    console.log('Landing Component woohooo');
  }
}
