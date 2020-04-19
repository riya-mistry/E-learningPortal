import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorregisterComponent } from './professorregister.component';

describe('ProfessorregisterComponent', () => {
  let component: ProfessorregisterComponent;
  let fixture: ComponentFixture<ProfessorregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
