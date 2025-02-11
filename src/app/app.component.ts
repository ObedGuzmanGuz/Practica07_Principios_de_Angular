import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonGreetComponent } from './button-greet/button-greet.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonGreetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica07-230142-ElementosBasicosAmgular';
}
