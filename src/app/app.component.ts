import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCounterComponent } from "./display-counter/display-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRx';
}
