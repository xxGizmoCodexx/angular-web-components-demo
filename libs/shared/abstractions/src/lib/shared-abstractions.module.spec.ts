import { async, TestBed } from '@angular/core/testing';
import { SharedAbstractionsModule } from './shared-abstractions.module';

describe('SharedAbstractionsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAbstractionsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAbstractionsModule).toBeDefined();
  });
});
