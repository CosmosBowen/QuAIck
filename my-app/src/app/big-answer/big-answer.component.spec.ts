import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigAnswerComponent } from './big-answer.component';

describe('BigAnswerComponent', () => {
  let component: BigAnswerComponent;
  let fixture: ComponentFixture<BigAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
