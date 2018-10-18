import { LibroModule } from './libro.module';

describe('LibroModule', () => {
  let libroModule: LibroModule;

  beforeEach(() => {
    libroModule = new LibroModule();
  });

  it('should create an instance', () => {
    expect(libroModule).toBeTruthy();
  });
});
