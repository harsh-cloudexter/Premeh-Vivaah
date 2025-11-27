export interface EventDetails {
  id: string;
  title: string;
  date: string;
  time: string;
  coordinates: string;
  location: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  description: string;
}

export interface RsvpData {
  name: string;
  email: string;
  guests: number;
  attending: string;
  message: string;
}

export enum BlessingTone {
  TRADITIONAL = "Traditional",
  MODERN = "Modern",
  FUNNY = "Funny",
  POETIC = "Poetic",
}
