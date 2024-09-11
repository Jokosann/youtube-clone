export interface DataVideoYoutube {
  kind: Kind;
  etag: string;
  id: string;
  player: Player;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface ContentDetails {
  duration: string;
  dimension: Dimension;
  definition: Definition;
  caption: string;
  licensedContent: boolean;
  contentRating: ContentRating;
  projection: Projection;
  regionRestriction?: RegionRestriction;
}

export interface ContentRating {}

export interface Player {
  embedHtml: string;
}

export enum Definition {
  HD = 'hd',
}

export enum Dimension {
  The2D = '2d',
}

export enum Projection {
  Rectangular = 'rectangular',
}

export interface RegionRestriction {
  allowed?: string[];
  blocked?: string[];
}

export enum Kind {
  YoutubeVideo = 'youtube#video',
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: LiveBroadcastContent;
  localized: Localized;
  defaultAudioLanguage?: DefaultLanguage;
  defaultLanguage?: DefaultLanguage;
}

export enum DefaultLanguage {
  En = 'en',
  ID = 'id',
  Ko = 'ko',
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Statistics {
  viewCount: string;
  likeCount?: string;
  favoriteCount: string;
  commentCount?: string;
}
