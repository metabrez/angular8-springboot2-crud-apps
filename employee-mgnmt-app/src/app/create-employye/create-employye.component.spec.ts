import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployyeComponent } from './create-employye.component';

describe('CreateEmployyeComponent', () => {
  let component: CreateEmployyeComponent;
  let fixture: ComponentFixture<CreateEmployyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
