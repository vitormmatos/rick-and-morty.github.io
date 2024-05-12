import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodePageComponent } from './episode-page.component';

describe('EpisodeComponent', () => {
  let component: EpisodePageComponent;
  let fixture: ComponentFixture<EpisodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
