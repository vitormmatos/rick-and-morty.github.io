import { Component } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { getLocations } from '../graphql.operations'
import { ActivatedRoute } from '@angular/router'
import { Location } from '../location/location.model'
import { LocationComponent } from '../location/location.component'
import { PaginatorComponent } from '../paginator/paginator.component'

@Component({
  selector: 'app-location-list-page',
  standalone: true,
  imports: [LocationComponent, PaginatorComponent],
  templateUrl: './location-list-page.component.html'
})
export class LocationListPageComponent {
  locations?: Location[]
  pageNumber!: string
  private querySubscription!: Subscription

  constructor(
    private readonly apollo: Apollo,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pageNumber = this.route.snapshot.params['id']
    this.querySubscription = this.apollo
      .watchQuery({ query: getLocations(this.pageNumber) })
      .valueChanges.subscribe(({ data }: any) => {
        this.locations = data.locations.results
      })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
