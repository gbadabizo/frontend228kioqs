import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParutionComponent } from './add-parution.component';

describe('AddParutionComponent', () => {
  let component: AddParutionComponent;
  let fixture: ComponentFixture<AddParutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
