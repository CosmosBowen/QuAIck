import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {

  constructor(private router: Router) { }
  showContent = false;
  // selectedOption = new FormControl('1st Grade');
  options = [
    { label: '1st Grade', value: 'grade1' },
    { label: '2nd Grade', value: 'grade2' },
    { label: '3rd Grade', value: 'grade3' },
    { label: '4th Grade', value: 'grade4' },
    { label: '5th Grade', value: 'grade5' },
  ];


  btn_start_click() {
    this.showContent = true;
  }

  btn_select_click(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedValue != "grade1") {
      this.router.navigate(['/playing'], { replaceUrl: true });
    }

  }
}
