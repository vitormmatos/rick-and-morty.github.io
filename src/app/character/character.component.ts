import { Component, Input } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  standalone: true,
  templateUrl: './character.component.html'
})
export class CharacterComponent {

  @Input() character!: Character
  
  getBadgeStatusColor(character: any): string {
    switch (character.status) {
      case 'Alive':
        return 'badge-success'
      case 'Dead':
        return 'badge-error'
      default:
        return 'badge-warning'
    }
  }
}
