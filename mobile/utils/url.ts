import { Linking } from 'react-native';

export const getYouTubeEmbedUrl = (url: string) => {
  const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);

  if (videoIdMatch) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }

  return url;
};

export const handleLinkPress = (url?: string) => {
  if (url) {
    Linking.openURL(url);
  }
};
