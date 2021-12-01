import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionadorComponent } from './condicionador.component';

describe('CondicionadorComponent', () => {
  let component: CondicionadorComponent;
  let fixture: ComponentFixture<CondicionadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
