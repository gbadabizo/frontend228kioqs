import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementsComponent } from './abonnements.component';

describe('AbonnementsComponent', () => {
  let component: AbonnementsComponent;
  let fixture: ComponentFixture<AbonnementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
