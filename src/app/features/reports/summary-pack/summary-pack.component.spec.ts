import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPackComponent } from './summary-pack.component';

describe('SummaryPackComponent', () => {
  let component: SummaryPackComponent;
  let fixture: ComponentFixture<SummaryPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
