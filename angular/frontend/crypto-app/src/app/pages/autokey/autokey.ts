import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autokey',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './autokey.html',
  styleUrls: ['./autokey.css'],
})
export class Autokey {
  text = '';
  key = '';
  result = '';

  private A = 'A'.charCodeAt(0);
  private a = 'a'.charCodeAt(0);
  private zero = '0'.charCodeAt(0);

  private mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  private shift(text: string, key: string, decrypt = false): string {
    if (!/^[A-Za-z0-9]+$/.test(key)) {
      return 'Key must contain letters and numbers only (A-Z, 0-9).';
    }

    let firstKey = key.length > 0 ? key[0] : 'A';
    if (firstKey >= '0' && firstKey <= '9') {
      const num = parseInt(key, 10) % 26;
      firstKey = String.fromCharCode(this.a + num);
    }
    let stream = firstKey;
    let out = '';

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const isUpper = ch >= 'A' && ch <= 'Z';
      const isLower = ch >= 'a' && ch <= 'z';
      const isDigit = ch >= '0' && ch <= '9';
      if (!isUpper && !isLower && !isDigit) {
        out += ch;
        continue;
      }

      let base: number;
      let alphabetSize: number;
      if (isUpper) {
        base = this.A;
        alphabetSize = 26;
      } else if (isLower) {
        base = this.a;
        alphabetSize = 26;
      } else {
        base = this.zero;
        alphabetSize = 10;
      }

      const tVal = ch.charCodeAt(0) - base;
      const keyChar = stream[i];

      let kVal: number;
      if (isDigit) {
        if (keyChar >= '0' && keyChar <= '9') {
          kVal = keyChar.charCodeAt(0) - this.zero;
        } else {
          kVal = (keyChar.toUpperCase().charCodeAt(0) - this.A) % 10;
        }
      } else {
        if (keyChar >= '0' && keyChar <= '9') {
          kVal = (keyChar.charCodeAt(0) - this.zero) % 26;
        } else {
          kVal = keyChar.toUpperCase().charCodeAt(0) - this.A;
        }
      }

      const val = this.mod(decrypt ? tVal - kVal : tVal + kVal, alphabetSize);
      const newCh = String.fromCharCode(base + val);

      out += newCh;
      stream += decrypt ? newCh : ch;
    }
    return out;
  }

  encrypt() {
    this.result = this.shift(this.text, this.key);
  }
  decrypt() {
    this.result = this.shift(this.text, this.key, true);
  }
}
