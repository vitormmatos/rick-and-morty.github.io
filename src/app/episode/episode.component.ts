import { Component, Input } from '@angular/core';
import { Episode } from './episode.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './episode.component.html',
})
export class EpisodeComponent {
  @Input() episode?: Episode
}
