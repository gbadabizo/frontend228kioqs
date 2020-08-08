import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParutionsComponent } from './parutions.component';

describe('ParutionsComponent', () => {
  let component: ParutionsComponent;
  let fixture: ComponentFixture<ParutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
