import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletasComponent } from './paletas.component';

describe('PaletasComponent', () => {
  let component: PaletasComponent;
  let fixture: ComponentFixture<PaletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
