import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-anything',
  templateUrl: './ask-anything.component.html',
  styleUrls: ['./ask-anything.component.css']
})
export class AskAnythingComponent {
  output = "This was great! Now how about you ask me anything!";
  ask?: string;

  constructor(
    private searchService: SearchService,
    private router: Router) { }
  onSelect(option: string): void {
    // console.log("this.selectedOption:", this.selectedOption);
    // this.ask = this.ask + this.selectedOption
    // this.searchService.giveResponse(this.ask).subscribe(
    //   response => {
    //     console.log("output: " + response)
    //     // this.output = response;
    //     this.router.navigate(['/big-answer'], { queryParams: { output: response } });


    //   }
    // );
  }
}
