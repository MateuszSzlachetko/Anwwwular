import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  fontSize: number = 16;
  minFontSize: number = 14;
  maxFontSize: number = 18;

  decreaseFontSize() {
    if (this.fontSize <= this.minFontSize) return;
    this.fontSize = this.fontSize - 2;
    this.updateDocumentFontSize();
  }

  increaseFontSize() {
    if (this.fontSize >= this.maxFontSize) return;
    this.fontSize = this.fontSize + 2;
    this.updateDocumentFontSize();
  }

  private updateDocumentFontSize() {
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }
}
