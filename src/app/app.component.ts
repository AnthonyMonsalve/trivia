import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardQuestionComponent } from "./question/card-question/card-question.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardQuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trivia';
}
