import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvideoComponent } from './viewvideo.component';

describe('ViewvideoComponent', () => {
  let component: ViewvideoComponent;
  let fixture: ComponentFixture<ViewvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
