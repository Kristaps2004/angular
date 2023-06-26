import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsPreviewComponent} from './projects-preview.component';

describe('ProjectsPreviewComponent', () => {
  let component: ProjectsPreviewComponent;
  let fixture: ComponentFixture<ProjectsPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPreviewComponent]
    });
    fixture = TestBed.createComponent(ProjectsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
