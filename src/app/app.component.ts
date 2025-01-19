import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCounterComponent } from "./display-counter/display-counter.component";
import { RenameComponent } from "./rename/rename.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayCounterComponent, RenameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRx';
}
