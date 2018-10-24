import { LibroDigitalModule } from './libro-digital.module';

describe('LibroDigitalModule', () => {
  let libroDigitalModule: LibroDigitalModule;

  beforeEach(() => {
    libroDigitalModule = new LibroDigitalModule();
  });

  it('should create an instance', () => {
    expect(libroDigitalModule).toBeTruthy();
  });
});
