import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAppViewComponent } from './auth-app-view.component';

describe('AuthAppViewComponent', () => {
  let component: AuthAppViewComponent;
  let fixture: ComponentFixture<AuthAppViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthAppViewComponent]
    });
    fixture = TestBed.createComponent(AuthAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
