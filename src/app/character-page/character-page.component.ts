import { Component } from '@angular/core'
import { CharacterListComponent } from '../character-list/character-list.component'
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { getCharacters } from '../graphql.operations'
import { ActivatedRoute } from '@angular/router'
import { Character } from '../character/character.model'
import { PaginatorComponent } from '../paginator/paginator.component'

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CharacterListComponent, PaginatorComponent],
  templateUrl: './character-page.component.html'
})
export class CharacterPageComponent {
  characters!: Character[]
  pageNumber!: string

  private querySubscription!: Subscription

  constructor(private readonly apollo: Apollo, private readonly route: ActivatedRoute) {
    this.pageNumber = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery({ query: getCharacters(this.pageNumber) })
      .valueChanges.subscribe(({ data }: any) => {
        this.characters = data.characters.results
      })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
