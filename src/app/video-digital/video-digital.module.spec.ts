import { VideoDigitalModule } from './video-digital.module';

describe('VideoDigitalModule', () => {
  let videoDigitalModule: VideoDigitalModule;

  beforeEach(() => {
    videoDigitalModule = new VideoDigitalModule();
  });

  it('should create an instance', () => {
    expect(videoDigitalModule).toBeTruthy();
  });
});
