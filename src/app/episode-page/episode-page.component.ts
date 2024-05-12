import { Component } from '@angular/core'
import { CharacterListComponent } from '../character-list/character-list.component'
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { getEpisode } from '../graphql.operations'
import { ActivatedRoute } from '@angular/router'
import { Episode } from '../episode/episode.model'

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './episode-page.component.html'
})
export class EpisodePageComponent {
  episode?: Episode
  id: string = this.route.snapshot.params['id']
  private querySubscription!: Subscription

  constructor(
    private readonly apollo: Apollo,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
      this.querySubscription = this.apollo
        .watchQuery({ query: getEpisode(this.id) })
        .valueChanges.subscribe(({ data }: any) => {
          this.episode = data.episode
        })
    }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
