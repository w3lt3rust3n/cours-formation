import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangChapterContainer2Component } from './lang-chapter-container2.component';

describe('LangChapterContainer2Component', () => {
  let component: LangChapterContainer2Component;
  let fixture: ComponentFixture<LangChapterContainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangChapterContainer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangChapterContainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
