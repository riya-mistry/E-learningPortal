import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoreditComponent } from './professoredit.component';

describe('ProfessoreditComponent', () => {
  let component: ProfessoreditComponent;
  let fixture: ComponentFixture<ProfessoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
