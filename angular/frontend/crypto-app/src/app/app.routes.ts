import { Routes } from '@angular/router';
import { Monoasc } from './pages/monoasc/monoasc';
import { Vigenere } from './pages/vigenere/vigenere';
import { Autokey } from './pages/autokey/autokey';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'monoasc',
    component: Monoasc,
  },
  {
    path: 'autokey',
    component: Autokey,
  },
  {
    path: 'vigenere',
    component: Vigenere,
  },
];
