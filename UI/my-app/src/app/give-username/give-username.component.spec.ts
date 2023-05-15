import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveUsernameComponent } from './give-username.component';

describe('GiveUsernameComponent', () => {
  let component: GiveUsernameComponent;
  let fixture: ComponentFixture<GiveUsernameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveUsernameComponent]
    });
    fixture = TestBed.createComponent(GiveUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
