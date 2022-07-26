import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  @Input() pageName: string = ''

  constructor (private readonly router: Router) {}

  goToPage (pageNumber: number): void {
    void this.router.navigate([`${this.pageName}${pageNumber}`])
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }
}