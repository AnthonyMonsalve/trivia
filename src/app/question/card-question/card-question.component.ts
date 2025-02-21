import { Component, signal } from '@angular/core';
import { TriviaQuestion } from '../../trivia-game/data/questions';
import { TriviaGameService } from '../../trivia-game/trivia-game.service';
import { OptionQuestionComponent } from '../option-question/option-question.component';

@Component({
  selector: 'app-card-question',
  standalone: true,
  imports: [OptionQuestionComponent],
  templateUrl: './card-question.component.html',
  styleUrl: './card-question.component.css',
})
export class CardQuestionComponent {
  currentQuestion = signal<TriviaQuestion | undefined>(undefined);
  indexQuestion = this.triviaGameService.indexQuestion;

  constructor(private triviaGameService: TriviaGameService) {
    this.triviaGameService.setCurrentQuestion();
    this.currentQuestion = this.triviaGameService.currentQuestion;
  }
}
