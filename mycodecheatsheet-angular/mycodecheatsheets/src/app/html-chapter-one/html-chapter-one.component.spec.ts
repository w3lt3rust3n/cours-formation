import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlChapterOneComponent } from './html-chapter-one.component';

describe('HtmlChapterOneComponent', () => {
  let component: HtmlChapterOneComponent;
  let fixture: ComponentFixture<HtmlChapterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlChapterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlChapterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
