import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankEditComponent } from './tank-edit.component';

describe('TankEditComponent', () => {
  let component: TankEditComponent;
  let fixture: ComponentFixture<TankEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
