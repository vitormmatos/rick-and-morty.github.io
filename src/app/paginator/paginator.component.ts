import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { environment } from '../../environments/environment'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  @Input() pageName!: string
  @Input() pageNumber!: string
  numPages!: number
  pages!: number[]

  private readonly episodeNumberPages: number = environment.EPISODE_NUMBER_PAGES
  private readonly characterAndLocationNumberPages: number =
    environment.CHARACTER_AND_LOCATION_NUMBER_PAGES

  ngOnInit(): void {
    this.numPages =
      this.pageName === 'episode/page/'
        ? this.episodeNumberPages
        : this.characterAndLocationNumberPages
    this.pages = Array.from({ length: this.numPages }, (_, i) => i + 1)
  }
}
