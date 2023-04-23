import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-answer',
  templateUrl: './big-answer.component.html',
  styleUrls: ['./big-answer.component.css']
})
export class BigAnswerComponent implements OnInit {
  output = "As an AI language model, I don't have personal preferences. However, some of the most popular books include \"To Kill a Mockingbird\" by Harper Lee, \"1984\" by George Orwell, \"The Great Gatsby\" by F. Scott Fitzgerald, \"Pride and Prejudice\" by Jane Austen, and \"The Lord of the Rings\" by J.R.R. Tolkien."
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.output = params['output'];
      console.log(this.output);

    });
  }
  next() {
    // this.output = "This was great! Now how about you ask me anything!"
    this.router.navigate(['/ask-anything']);
  }
}
