import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpostComponent } from './wallpost.component';

describe('WallpostComponent', () => {
  let component: WallpostComponent;
  let fixture: ComponentFixture<WallpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
