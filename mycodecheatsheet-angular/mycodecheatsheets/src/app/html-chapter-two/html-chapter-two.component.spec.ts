import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlChapterTwoComponent } from './html-chapter-two.component';

describe('HtmlChapterTwoComponent', () => {
  let component: HtmlChapterTwoComponent;
  let fixture: ComponentFixture<HtmlChapterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlChapterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlChapterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
