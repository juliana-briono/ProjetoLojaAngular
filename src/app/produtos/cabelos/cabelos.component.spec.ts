import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelosComponent } from './cabelos.component';

describe('CabelosComponent', () => {
  let component: CabelosComponent;
  let fixture: ComponentFixture<CabelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
