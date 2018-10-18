import { SalaModule } from './sala.module';

describe('SalaModule', () => {
  let salaModule: SalaModule;

  beforeEach(() => {
    salaModule = new SalaModule();
  });

  it('should create an instance', () => {
    expect(salaModule).toBeTruthy();
  });
});
