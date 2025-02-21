import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TriviaGameService } from '../../trivia-game/trivia-game.service';

@Component({
  selector: 'app-option-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-question.component.html',
  styleUrl: './option-question.component.css',
})
export class OptionQuestionComponent {
  option = input<string | undefined>('');
  gameEnded = this.triviaGameService.gameEnded;
  WrongAnswer = false;

  constructor(private triviaGameService: TriviaGameService) {}

  selectOption() {
    if (this.option() === undefined || this.gameEnded()) {
      return;
    }

    const statusQuestion = this.triviaGameService.selectOption(this.option());
    if (!statusQuestion) this.WrongAnswer = true;

    if (this.gameEnded()) {
      if (this.triviaGameService.winner()) {
        this.triviaGameService.endGame();
        this.triviaGameService.setEndedGame(false);
      } else {
        setTimeout(() => {
          this.triviaGameService.endGame();
          this.triviaGameService.setEndedGame(false);
        }, 2000);
      }
    } else {
      this.WrongAnswer = false;
    }
  }
}
