import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { FontService } from '../../core/services/font.service';
import { Observable } from 'rxjs';
import { Theme } from '../../core/types/theme';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-accessibility-menu',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe, NgIf],
  templateUrl: './accessibility-menu.component.html',
  styleUrl: './accessibility-menu.component.scss',
})
export class AccessibilityMenuComponent {
  themeService: ThemeService = inject(ThemeService);
  fontService: FontService = inject(FontService);
  theme$: Observable<Theme> = this.themeService.getActiveTheme();

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  decreaseFontSize() {
    this.fontService.decreaseFontSize();
  }

  increaseFontSize() {
    this.fontService.increaseFontSize();
  }
}
