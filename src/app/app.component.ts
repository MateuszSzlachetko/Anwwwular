import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityMenuComponent } from './components/accessibility-menu/accessibility-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AccessibilityMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = ;
}
