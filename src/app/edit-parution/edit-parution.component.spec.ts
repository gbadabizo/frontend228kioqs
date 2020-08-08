import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParutionComponent } from './edit-parution.component';

describe('EditParutionComponent', () => {
  let component: EditParutionComponent;
  let fixture: ComponentFixture<EditParutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
