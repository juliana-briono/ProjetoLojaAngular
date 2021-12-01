import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitricoComponent } from './citrico.component';

describe('CitricoComponent', () => {
  let component: CitricoComponent;
  let fixture: ComponentFixture<CitricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
