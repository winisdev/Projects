import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vigenere',
  imports: [FormsModule],
  templateUrl: './vigenere.html',
  styleUrl: './vigenere.css',
})
export class Vigenere {
  text = '';
  key = '';
  result = '';

  private process(decrypt = false) {
    if (!this.text || !this.key) {
      this.result = 'Please provide text and key!';
      return;
    }
    if (!/^[A-Za-z0-9]+$/.test(this.key)) {
      this.result = 'Key must contain A–Z, 0–9.';
      return;
    }

    const T = this.text.toUpperCase();
    const K = this.key.toUpperCase();
    let res = '';

    for (let i = 0, j = 0; i < T.length; i++) {
      const c = T[i],
        isL = c >= 'A' && c <= 'Z',
        isN = c >= '0' && c <= '9';
      if (!isL && !isN) {
        res += c;
        continue;
      }

      const base = isL ? 65 : 48;
      const size = isL ? 26 : 10;
      const t = c.charCodeAt(0) - base;

      const kc = K[j % K.length];
      const k = kc >= '0' && kc <= '9' ? kc.charCodeAt(0) - 48 : kc.charCodeAt(0) - 65;

      const s = decrypt ? (t - k + size) % size : (t + k) % size;
      res += String.fromCharCode(s + base);
      j++;
    }

    this.result = res;
  }

  encrypt() {
    this.process(false);
  }
  decrypt() {
    this.process(true);
  }
}
