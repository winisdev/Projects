import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Monoasc } from './monoasc';

describe('Monoasc', () => {
  let component: Monoasc;
  let fixture: ComponentFixture<Monoasc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Monoasc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Monoasc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
