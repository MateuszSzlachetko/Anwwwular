import { afterNextRender, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme, themes } from '../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = themes.light;
  private active$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    this.active,
  );

  constructor() {
    afterNextRender(() => {
      const themePreference = this.getThemePreference();
      this.setActiveTheme(
        themePreference === 'contrast' ? themes.contrast : themes.light,
      );
    });
  }

  setActiveTheme(theme: Theme) {
    this.active = theme;
    document.documentElement.className = '';
    document.documentElement.classList.add(this.active.className);
    this.updateThemePreference(this.active.name);
    this.active$.next(this.active);
  }

  setHighContrastMode() {
    this.setActiveTheme(themes.contrast);
  }

  setLightMode() {
    this.setActiveTheme(themes.light);
  }

  toggleTheme(): void {
    this.setActiveTheme(
      this.active === themes.light ? themes.contrast : themes.light,
    );
  }

  updateThemePreference(themeName: string) {
    localStorage.setItem('themePreference', themeName);
  }

  getThemePreference() {
    return localStorage.getItem('themePreference');
  }

  getActiveTheme() {
    return this.active$.asObservable();
  }
}
