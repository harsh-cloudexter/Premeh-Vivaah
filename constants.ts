import { EventDetails, GalleryImage } from "./types";

export const COUPLE = {
  groom: "Premraj",
  bride: "Mehal",
  weddingDate: "2026-02-08T12:00:00",
  hashtag: "#PremrajMehalForever",
};

export const WEDDING_EVENTS: EventDetails[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    date: "February 6, 2026",
    time: "5:00 PM",
    coordinates: "23.380361,70.513944",
    location: "Aadhoi Datak",
    description:
      "A evening of turmeric, laughter, and blessings to start the festivities.",
    image: "https://picsum.photos/800/600?random=10",
  },
  {
    id: "dandiyaras",
    title: "Dandiyaras",
    date: "February 7, 2026",
    time: "8:00 PM",
    coordinates: "23.380361,70.513944",
    location: "Aadhoi Datak",
    description:
      "An evening filled with music, dance, and vibrant performances.",
    image: "https://picsum.photos/800/600?random=11",
  },
  {
    id: "wedding",
    title: "The Royal Wedding",
    date: "February 8, 2026",
    time: "12:00 PM - 1:00 PM ",
    coordinates: "23.380361,70.513944",
    location: "Aadhoi Datak",
    description:
      "Marriage means weaving two lives into one. Thinking, feeling, and living beyond yourself can be a stepping stone to Ultimate Union.",
    image:
      "https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "reception",
    title: "Grand Reception",
    date: "February 15, 2026",
    time: "6:00 PM",
    coordinates: "19.197709376339873, 72.81101228650755",
    location: "The Green Village",
    description:
      "Celebrate the newlyweds with a night of fine dining and elegance.",
    image: "https://picsum.photos/800/600?random=13",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/wedding1/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding1/450/600",
    alt: "First Meeting",
    description:
      "Where it all began - our first coffee date that turned into forever.",
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/wedding2/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding2/450/600",
    alt: "The Proposal",
    description: "A surprise sunset proposal by the lakeside. She said yes!",
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/wedding3/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding3/450/600",
    alt: "Traditional Day",
    description: "Celebrating our roots and traditions together.",
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/wedding4/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding4/450/600",
    alt: "Engagement Party",
    description: "Dancing the night away with our closest friends and family.",
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/wedding5/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding5/450/600",
    alt: "Pre-wedding Shoot",
    description: "Capturing moments of quiet joy amidst the wedding chaos.",
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/wedding6/900/1200",
    thumbnail: "https://picsum.photos/seed/wedding6/450/600",
    alt: "Diwali Celebration",
    description: "Our first Festival of Lights together as a couple.",
  },
];
