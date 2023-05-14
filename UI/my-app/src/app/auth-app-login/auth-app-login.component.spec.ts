import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAppLoginComponent } from './auth-app-login.component';

describe('AuthAppLoginComponent', () => {
  let component: AuthAppLoginComponent;
  let fixture: ComponentFixture<AuthAppLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthAppLoginComponent]
    });
    fixture = TestBed.createComponent(AuthAppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
