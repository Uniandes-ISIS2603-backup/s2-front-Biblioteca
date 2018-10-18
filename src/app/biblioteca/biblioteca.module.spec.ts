import { BibliotecaModule } from './biblioteca.module';

describe('BibliotecaModule', () => {
  let bibliotecaModule: BibliotecaModule;

  beforeEach(() => {
    bibliotecaModule = new BibliotecaModule();
  });

  it('should create an instance', () => {
    expect(bibliotecaModule).toBeTruthy();
  });
});
