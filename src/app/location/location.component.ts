import { Component, Input } from '@angular/core';
import { Location } from './location.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './location.component.html'
})
export class LocationComponent {
  @Input() location?: Location
}
