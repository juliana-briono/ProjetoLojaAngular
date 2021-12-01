import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RostoComponent } from './rosto.component';

describe('RostoComponent', () => {
  let component: RostoComponent;
  let fixture: ComponentFixture<RostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
