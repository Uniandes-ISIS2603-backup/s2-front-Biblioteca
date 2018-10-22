import { PrestamoModule } from './prestamo.module';

describe('PrestamoModule', () => {
  let prestamoModule: PrestamoModule;

  beforeEach(() => {
    prestamoModule = new PrestamoModule();
  });

  it('should create an instance', () => {
    expect(prestamoModule).toBeTruthy();
  });
});
