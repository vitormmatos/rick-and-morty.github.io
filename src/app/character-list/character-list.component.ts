import { Component, Input } from '@angular/core'
import { CharacterComponent } from '../character/character.component'
import { Character } from '../character/character.model'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  @Input() characters?: Character[]
}
