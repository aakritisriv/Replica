import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankAddComponent } from './tank-add.component';

describe('TankAddComponent', () => {
  let component: TankAddComponent;
  let fixture: ComponentFixture<TankAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
