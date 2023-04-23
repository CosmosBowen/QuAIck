import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-anything',
  templateUrl: './ask-anything.component.html',
  styleUrls: ['./ask-anything.component.css']
})
export class AskAnythingComponent {
  to_query = false;
  output = "This was great! Now how about you ask me anything!";
  ask: string = "";

  constructor(
    private searchService: SearchService,
    private router: Router) { }

  ask_anything(query: string): void {
    this.to_query = false;
    console.log("query:", query);
    this.searchService.giveResponse(query).subscribe(
      response => {
        console.log("output: " + response)
        // this.output = response;
        this.router.navigate(['/big-answer'], { queryParams: { output: response } });

      }
    );
  }

  next(): void {
    this.output = ""
    this.to_query = true;
  }

  compare(): void {
    this.router.navigate(['/homepage']);
  }
}
