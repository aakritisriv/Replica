import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrashComponent } from './asset-trash.component';

describe('AssetTrashComponent', () => {
  let component: AssetTrashComponent;
  let fixture: ComponentFixture<AssetTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
