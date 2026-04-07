import { Linking } from 'react-native';

export const extractYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
};

export const getYouTubeThumbnail = (url: string): string => {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return '';

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

export const handleLinkPress = (url?: string) => {
  if (url) {
    Linking.openURL(url);
  }
};
