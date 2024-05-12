import { Component } from '@angular/core'

import { getEpisodes } from '../graphql.operations'
import { ActivatedRoute } from '@angular/router'
import { Episode } from '../episode/episode.model'
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { EpisodeComponent } from '../episode/episode.component'
import { PaginatorComponent } from '../paginator/paginator.component'

@Component({
  selector: 'app-episode-list-page',
  standalone: true,
  imports: [EpisodeComponent, PaginatorComponent],
  templateUrl: './episode-list-page.component.html'
})
export class EpisodeListPageComponent {
  episodes?: Episode[]
  pageNumber!: string
  private querySubscription!: Subscription

  constructor(
    private readonly apollo: Apollo,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.pageNumber = this.route.snapshot.params['id']
    this.querySubscription = this.apollo
      .watchQuery({ query: getEpisodes(this.pageNumber) })
      .valueChanges.subscribe(({ data }: any) => {
        this.episodes = data.episodes.results
      })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
