import { async, TestBed } from '@angular/core/testing';
import { MapWidgetModule } from './map-widget.module';

describe('MapWidgetModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MapWidgetModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MapWidgetModule).toBeDefined();
  });
});
