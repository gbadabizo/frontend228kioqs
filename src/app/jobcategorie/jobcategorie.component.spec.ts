import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcategorieComponent } from './jobcategorie.component';

describe('JobcategorieComponent', () => {
  let component: JobcategorieComponent;
  let fixture: ComponentFixture<JobcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
