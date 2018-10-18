import { AppRoutingFlatModule=appModule } from './app-routing--flat-module=app.module';

describe('AppRoutingFlatModule=appModule', () => {
  let appRoutingFlatModule=appModule: AppRoutingFlatModule=appModule;

  beforeEach(() => {
    appRoutingFlatModule=appModule = new AppRoutingFlatModule=appModule();
  });

  it('should create an instance', () => {
    expect(appRoutingFlatModule=appModule).toBeTruthy();
  });
});
