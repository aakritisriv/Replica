import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankTrashComponent } from './tank-trash.component';

describe('TankTrashComponent', () => {
  let component: TankTrashComponent;
  let fixture: ComponentFixture<TankTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
