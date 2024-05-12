import { Component } from '@angular/core';
import { getLocation } from '../graphql.operations'
import { ActivatedRoute } from '@angular/router'
import { Location } from '../location/location.model'
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { CharacterListComponent } from '../character-list/character-list.component';
import { PaginatorComponent } from '../paginator/paginator.component';


@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [CharacterListComponent, PaginatorComponent],
  templateUrl: './location-page.component.html',
})
export class LocationPageComponent {
  location!: Location
  id: string = this.route.snapshot.params['id']
  private querySubscription!: Subscription

  constructor(
    private readonly apollo: Apollo,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
      this.querySubscription = this.apollo
        .watchQuery({ query: getLocation(this.id) })
        .valueChanges.subscribe(({ data }: any) => {
          this.location = data.location
        })
    }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
