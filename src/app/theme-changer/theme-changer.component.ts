import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-changer.component.html'
})
export class ThemeChangerComponent {
  themeNames: string[] = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'lemonade',
    'night',
    'coffee',
    'winter'
  ]
}
