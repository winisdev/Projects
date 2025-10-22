import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vigenere } from './vigenere';

describe('Vigenere', () => {
  let component: Vigenere;
  let fixture: ComponentFixture<Vigenere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vigenere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vigenere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
