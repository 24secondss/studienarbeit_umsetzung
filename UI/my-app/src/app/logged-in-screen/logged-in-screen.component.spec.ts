import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInScreenComponent } from './logged-in-screen.component';

describe('LoggedInScreenComponent', () => {
  let component: LoggedInScreenComponent;
  let fixture: ComponentFixture<LoggedInScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedInScreenComponent]
    });
    fixture = TestBed.createComponent(LoggedInScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
