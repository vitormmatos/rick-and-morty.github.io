import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListPageComponent } from './episode-list-page.component';

describe('EpisodeListPageComponent', () => {
  let component: EpisodeListPageComponent;
  let fixture: ComponentFixture<EpisodeListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
