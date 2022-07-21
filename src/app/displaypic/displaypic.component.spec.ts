import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypicComponent } from './displaypic.component';

describe('DisplaypicComponent', () => {
  let component: DisplaypicComponent;
  let fixture: ComponentFixture<DisplaypicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaypicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
