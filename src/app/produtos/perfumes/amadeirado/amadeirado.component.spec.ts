import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmadeiradoComponent } from './amadeirado.component';

describe('AmadeiradoComponent', () => {
  let component: AmadeiradoComponent;
  let fixture: ComponentFixture<AmadeiradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmadeiradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmadeiradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
