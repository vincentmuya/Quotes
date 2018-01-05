import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes = [
  new Quote(1,"Dr. Seuss","Don't cry because it's over, smile because it happened."),
  new Quote(2,"Oscar Wilde", "Be yourself; everyone else is already taken."),
  new Quote(3," Marilyn Monroe", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."),
  new Quote(4,"Albert Einstein", "Albert Einstein"),
  new Quote(5,"Marcus Tullius Cicero", "A room without books is like a body without a soul."),
  new Quote(6,"Bernard M. Baruch", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.")
]
  constructor() { }

  ngOnInit() {
  }

}
