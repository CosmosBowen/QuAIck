import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  output = "Awesome, lets chat. Select an option from the drop down menu";
  options = ["book", "food", "animal"];
  selectedOption?: string;
  ask = "what is your favorite "

  constructor(
    private searchService: SearchService,
    private router: Router) { }
  onSelect(option: string): void {
    this.selectedOption = option;
    console.log("this.selectedOption:", this.selectedOption);
    this.ask = this.ask + this.selectedOption
    this.searchService.giveResponse(this.ask).subscribe(
      response => {
        // response = "I love food, and I believe you love too! I'm a foodie AI!";
        console.log("output: " + response)
        // this.output = response;
        this.router.navigate(['/big-answer'], { queryParams: { output: response } });


      }
    );
  }
}
