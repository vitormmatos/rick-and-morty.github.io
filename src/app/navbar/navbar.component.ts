import { Component } from '@angular/core'
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeChangerComponent, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
