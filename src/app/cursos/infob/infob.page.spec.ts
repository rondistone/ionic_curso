import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobPage } from './infob.page';

describe('InfobPage', () => {
  let component: InfobPage;
  let fixture: ComponentFixture<InfobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
