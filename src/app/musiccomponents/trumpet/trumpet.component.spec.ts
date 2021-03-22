import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrumpetComponent } from './trumpet.component';

describe('TrumpetComponent', () => {
  let component: TrumpetComponent;
  let fixture: ComponentFixture<TrumpetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
