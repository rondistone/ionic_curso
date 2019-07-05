import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmPage } from './mm.page';

describe('MmPage', () => {
  let component: MmPage;
  let fixture: ComponentFixture<MmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
