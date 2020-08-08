import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailParutionComponent } from './detail-parution.component';

describe('DetailParutionComponent', () => {
  let component: DetailParutionComponent;
  let fixture: ComponentFixture<DetailParutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailParutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailParutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
