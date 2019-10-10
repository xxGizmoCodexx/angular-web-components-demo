import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWidgetContainerComponent } from './map-widget-container.component';

describe('MapWidgetContainerComponent', () => {
  let component: MapWidgetContainerComponent;
  let fixture: ComponentFixture<MapWidgetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWidgetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWidgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
