import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMenuComponent } from './rest-menu.component';

describe('RestMenuComponent', () => {
  let component: RestMenuComponent;
  let fixture: ComponentFixture<RestMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestMenuComponent]
    });
    fixture = TestBed.createComponent(RestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
