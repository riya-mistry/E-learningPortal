import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedescriptionComponent } from './coursedescription.component';

describe('CoursedescriptionComponent', () => {
  let component: CoursedescriptionComponent;
  let fixture: ComponentFixture<CoursedescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
