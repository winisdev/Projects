// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-monoasc',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './monoasc.html',
//   styleUrls: ['./monoasc.css'],
// })
// export class Monoasc {
//   text: string = '';
//   key: number = 0;
//   result: string = '';

//   private shiftChar(char: string, shift: number): string {
//     const a = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
//     return String.fromCharCode(((char.charCodeAt(0) - a + shift + 26) % 26) + a);
//   }

//   private transform(shift: number): string {
//     return this.text
//       .split('')
//       .map((c) => {
//         if (/[A-Z]/.test(c)) return this.shiftChar(c, shift);
//         if (/[a-z]/.test(c)) return this.shiftChar(c, shift).toLowerCase();
//         return c;
//       })
//       .join('');
//   }

//   private getShift(): number | null {
//     const num = Number(this.key);
//     if (isNaN(num)) {
//       this.result = 'Key must be a number!';
//       return null;
//     }
//     return num % 26;
//   }

//   encrypt(): void {
//     const shift = this.getShift();
//     if (shift !== null) this.result = this.transform(shift);
//   }

//   decrypt(): void {
//     const shift = this.getShift();
//     if (shift !== null) this.result = this.transform(-shift);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monoasc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './monoasc.html',
  styleUrls: ['./monoasc.css'],
})
export class Monoasc {
  text: string = '';
  key: string = ''; // key can be number or letter
  result: string = '';

  private shiftChar(char: string, shift: number): string {
    const isLower = char >= 'a' && char <= 'z';
    const base = isLower ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
  }

  private transform(shift: number): string {
    return this.text
      .split('')
      .map((c) => {
        if (/[A-Z]/.test(c)) return this.shiftChar(c, shift);
        if (/[a-z]/.test(c)) return this.shiftChar(c, shift);
        return c;
      })
      .join('');
  }

  private getShift(): number | null {
    const num = Number(this.key);
    if (!isNaN(num)) {
      return num % 26;
    }

    const keyChar = this.key.trim().toUpperCase();
    if (keyChar.length === 1 && keyChar >= 'A' && keyChar <= 'Z') {
      return keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    this.result = 'Key must be a number or a single letter!';
    return null;
  }

  encrypt(): void {
    const shift = this.getShift();
    if (shift !== null) this.result = this.transform(shift);
  }

  decrypt(): void {
    const shift = this.getShift();
    if (shift !== null) this.result = this.transform(-shift);
  }
}
