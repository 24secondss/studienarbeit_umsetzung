import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLoginComponent } from './normal-login.component';

describe('NormalLoginComponent', () => {
  let component: NormalLoginComponent;
  let fixture: ComponentFixture<NormalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalLoginComponent]
    });
    fixture = TestBed.createComponent(NormalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
