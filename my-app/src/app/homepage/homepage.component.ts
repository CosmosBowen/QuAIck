import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // output = "hi"
  outputs = []

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    console.log("@@@@@@@@@@@@@@@");
  }
  submit(input: string): void {


    //TODO
    this.searchService.giveResponse(input).subscribe(
      response => {
        console.log("output: " + response)
        // this.output = response;
        this.outputs = response;
      }
    );
  }

}
