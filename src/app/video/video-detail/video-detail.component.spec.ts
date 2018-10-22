import { VideoDetailModule } from './video-detail.module';

describe('VideoDetailModule', () => {
  let videoDetailModule: VideoDetailModule;

  beforeEach(() => {
    videoDetailModule = new VideoDetailModule();
  });

  it('should create an instance', () => {
    expect(videoDetailModule).toBeTruthy();
  });
});
