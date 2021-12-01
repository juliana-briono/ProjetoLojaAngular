import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhasComponent } from './unhas.component';

describe('UnhasComponent', () => {
  let component: UnhasComponent;
  let fixture: ComponentFixture<UnhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
