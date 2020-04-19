import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorallComponent } from './professorall.component';

describe('ProfessorallComponent', () => {
  let component: ProfessorallComponent;
  let fixture: ComponentFixture<ProfessorallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
