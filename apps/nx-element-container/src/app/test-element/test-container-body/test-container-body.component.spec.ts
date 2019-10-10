import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContainerBodyComponent } from './test-container-body.component';

describe('TestContainerBodyComponent', () => {
  let component: TestContainerBodyComponent;
  let fixture: ComponentFixture<TestContainerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContainerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
