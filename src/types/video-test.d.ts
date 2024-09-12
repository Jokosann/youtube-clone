export interface VideoYoutubeTest {
  id: string;
  title: string;
  channel: ChannelTest;
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface ChannelTest {
  name: string;
  id: string;
  profileUrl: string;
}
