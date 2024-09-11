export interface Channel {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists;
}

export interface RelatedPlaylists {
  likes: string;
  uploads: string;
}

export interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: Date;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}
