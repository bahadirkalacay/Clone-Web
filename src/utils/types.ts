export type Image = {
  url: string;
  width: number;
  height: number;
};

export type ImageThumb = {
  default: Image;
  high: Image;
  medium: Image;
};

export type VideoItemProps = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: ImageThumb;
  title: string;
};

export type VideoProps = {
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  kind: string;
  snippet: VideoItemProps;
  statistics?: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
    likeCount: string;
  };
};

export type ChannelDetailsProps = {
  brandingSettings: {
    channel: {
      country: string;
      description: string;
      keywords: string;
      title: string;
      unsubscribedTrailer: string;
    };
    image: {
      bannerExternalUrl: string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  id: string;
  kind: string;
  snippet: {
    country: string;
    customUrl: string;
    description: string;
    localized: {
      title: string;
      description: string;
    };
    publishedAt: string;
    thumbnails: ImageThumb;
    title: string;
  };
  statistics: {
    hiddenSubscriberCount: boolean;
    subscriberCount: string;
    videoCount: string;
    viewCount: string;
  };
};
