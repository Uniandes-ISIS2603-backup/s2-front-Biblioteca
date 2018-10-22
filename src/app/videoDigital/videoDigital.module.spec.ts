import { VideoDigitalModule } from './videoDigital.module';

describe('VideoDigitalModule', () => {
  let videoDigitalModule: VideoDigitalModule;

  beforeEach(() => {
    videoDigitalModule = new VideoDigitalModule();
  });

  it('should create an instance', () => {
    expect(videoDigitalModule).toBeTruthy();
  });
});
