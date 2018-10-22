import { VideoDigitalListModule } from './video-digital-list.module';

describe('VideoDigitalListModule', () => {
  let videoDigitalListModule: VideoDigitalListModule;

  beforeEach(() => {
    videoDigitalListModule = new VideoDigitalListModule();
  });

  it('should create an instance', () => {
    expect(videoDigitalListModule).toBeTruthy();
  });
});
