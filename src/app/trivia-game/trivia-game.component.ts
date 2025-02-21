import { Component } from '@angular/core';
import { CardQuestionComponent } from '../question/card-question/card-question.component';
import { TriviaGameService } from './trivia-game.service';

@Component({
  selector: 'app-trivia-game',
  standalone: true,
  imports: [CardQuestionComponent],
  templateUrl: './trivia-game.component.html',
  styleUrl: './trivia-game.component.css',
})
export class TriviaGameComponent {
  gameTriviaQuestions = this.triviaGameService.questionsToPlay;
  indexQuestion = this.triviaGameService.indexQuestion;
  gameEnded = this.triviaGameService.gameEnded;
  winner = this.triviaGameService.winner;

  constructor(private triviaGameService: TriviaGameService) {}

  startGame() {
    this.triviaGameService.startGame();
    console.log('Game started!', this.gameTriviaQuestions());
  }

  endGame() {
    this.triviaGameService.endGame();
    console.log('Game ended!', this.gameTriviaQuestions());
  }
}
