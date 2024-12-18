import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppViewComponent } from './main-app-view.component';

describe('MainAppViewComponent', () => {
  let component: MainAppViewComponent;
  let fixture: ComponentFixture<MainAppViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAppViewComponent]
    });
    fixture = TestBed.createComponent(MainAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
