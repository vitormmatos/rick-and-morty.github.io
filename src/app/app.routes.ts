import { Routes } from '@angular/router'

import { CharacterPageComponent } from './character-page/character-page.component'
import { EpisodePageComponent } from './episode-page/episode-page.component'
import { EpisodeListPageComponent } from './episode-list-page/episode-list-page.component'
import { LocationListPageComponent } from './location-list-page/location-list-page.component'
import { LocationPageComponent } from './location-page/location-page.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterPageComponent },
  { path: 'location/page/:id', component: LocationListPageComponent },
  { path: 'location/:id', component: LocationPageComponent },
  { path: 'episode/page/:id', component: EpisodeListPageComponent },
  { path: 'episode/:id', component: EpisodePageComponent },
  { path: '**', redirectTo: 'character/page/1' }
]
