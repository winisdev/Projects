CryptoApp

CryptoApp is a simple web application built with Angular CLI v20.3.2.
It allows users to encrypt and decrypt text using classical cryptography methods such as:

Additive (Caesar) Cipher

Autokey Cipher

Vigenère Cipher

Note: This project was created as a school activity.

Features

Additive Cipher (Caesar) — Encrypt and decrypt text using character shifting.

Autokey Cipher — A stronger cipher that uses the plaintext as part of the key.

Vigenère Cipher — A polyalphabetic substitution cipher for more secure encryption.

Real-time encryption and decryption.

Simple, clean UI for easy interaction.

Tech Stack

Angular CLI
 v20.3.2

TypeScript

HTML / CSS

Getting Started
1. Clone the repository
git clone <repo-url>

2. Navigate to the project folder
cd angular/frontend/crypto-app

3. Install dependencies
npm install

4. Run the app
ng serve

5. Open your browser
http://localhost:4200/

🧠 How It Works

Additive Cipher → Each letter is shifted by a fixed key. Example: key = 3 → A becomes D.

Autokey Cipher → Starts with a key and uses the plaintext itself to extend it.

Vigenère Cipher → Uses a repeating keyword for polyalphabetic encryption, making it harder to break.
