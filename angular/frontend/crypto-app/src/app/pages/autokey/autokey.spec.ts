import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autokey } from './autokey';

describe('Autokey', () => {
  let component: Autokey;
  let fixture: ComponentFixture<Autokey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autokey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autokey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
