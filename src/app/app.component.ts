import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TriviaGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trivia';
}
