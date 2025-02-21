import { Injectable, signal } from '@angular/core';
import {
  easyQuestions,
  hardTriviaQuestions,
  mediumTriviaQuestions,
  TriviaQuestion,
} from './data/questions';

@Injectable({
  providedIn: 'root',
})
export class TriviaGameService {
  easyQuestions: TriviaQuestion[] = easyQuestions;
  mediumQuestions: TriviaQuestion[] = mediumTriviaQuestions;
  hardQuestions: TriviaQuestion[] = hardTriviaQuestions;

  questionsToPlay = signal<TriviaQuestion[]>([]);
  currentQuestion = signal<TriviaQuestion | undefined>(undefined);
  indexQuestion = signal<number>(0);
  gameEnded = signal<boolean>(false);
  winner = signal<boolean>(false);
  maxQuestions = 10;

  constructor() {}

  get CurrentQuestion() {
    return this.currentQuestion;
  }

  selectOption(option: string | undefined) {
    const currentQuestion = this.currentQuestion();
    if (currentQuestion?.correctAnswer === option) {
      if (this.indexQuestion() == this.maxQuestions - 1) {
        this.setWinner(true);
        this.setEndedGame(true);
      } else {
        this.nextQuestion();
        this.setEndedGame(false);
      }
      console.log('Correct answer');
      return true;
    } else {
      this.setEndedGame(true);
      console.log('Wrong answer');
      return false;
    }
  }

  nextQuestion() {
    this.indexQuestion.set(this.indexQuestion() + 1);
    this.setCurrentQuestion();
  }

  setCurrentQuestion() {
    this.currentQuestion.set(this.questionsToPlay()[this.indexQuestion()]);
  }

  setEndedGame(status: boolean) {
    this.gameEnded.set(status);
  }

  setWinner(status: boolean) {
    this.winner.set(status);
  }

  startGame() {
    const questions: TriviaQuestion[] = [];
    questions.push(...this.getRandomQuestions(3, this.easyQuestions));
    questions.push(...this.getRandomQuestions(4, this.mediumQuestions));
    questions.push(...this.getRandomQuestions(3, this.hardQuestions));
    this.questionsToPlay.set(questions);
    this.setWinner(false);
  }

  endGame() {
    this.questionsToPlay.set([]);
    this.indexQuestion.set(0);
  }

  getRandomQuestions(quantity: number, questions: TriviaQuestion[]) {
    const randomQuestions: TriviaQuestion[] = [];
    const availableQuestions = [...questions];
    for (let i = 0; i < quantity; i++) {
      if (availableQuestions.length === 0) break;
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      randomQuestions.push(availableQuestions[randomIndex]);
      availableQuestions.splice(randomIndex, 1);
    }
    return randomQuestions;
  }
}
