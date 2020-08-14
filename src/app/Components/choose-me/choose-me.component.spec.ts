import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMeComponent } from './choose-me.component';

describe('ChooseMeComponent', () => {
  let component: ChooseMeComponent;
  let fixture: ComponentFixture<ChooseMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
