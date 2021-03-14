import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangChapterContainerComponent } from './lang-chapter-container.component';

describe('LangChapterContainerComponent', () => {
  let component: LangChapterContainerComponent;
  let fixture: ComponentFixture<LangChapterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangChapterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangChapterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
