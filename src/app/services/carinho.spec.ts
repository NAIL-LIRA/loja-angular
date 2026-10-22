import { TestBed } from '@angular/core/testing';
import { Carinho } from './carinho';

describe('Carinho', () => {
  let service: Carinho;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Carinho);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
