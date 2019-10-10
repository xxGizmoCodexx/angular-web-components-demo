import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContainerHeaderComponent } from './test-container-header.component';

describe('TestContainerHeaderComponent', () => {
  let component: TestContainerHeaderComponent;
  let fixture: ComponentFixture<TestContainerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContainerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
