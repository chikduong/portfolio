// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A PROJECT
//
// 1. Add a new object to the array below (order in this array = order on site).
// 2. Drop the thumbnail in:  public/thumbnails/<filename>
// 3. For VIDEO projects:
//    - Local file:    public/videos/<filename>  →  videoUrl: '/videos/<filename>'
//    - Vimeo embed:   videoUrl: 'https://player.vimeo.com/video/XXXXXXXXX'
//    - YouTube embed: videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX'
// 4. For STILL projects:
//    - Drop the full-size image in public/images/<filename>
//    - If imageUrl is omitted, the lightbox enlarges the thumbnail.
//
// NOTE: Video files are excluded from Git (see .gitignore).
// Commit thumbnails and images — they are small enough for GitHub.
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'video' | 'still';

export interface Project {
  /** Unique slug — used in the URL: /video/:id */
  id: string;
  title: string;
  description: string;
  role: string;
  /** Client or organization name */
  client: string;
  year: number;
  /** Path to thumbnail (placed in public/thumbnails/) */
  thumbnailUrl: string;
  /**
   * VIDEO projects only.
   * Local:   '/videos/filename.mp4'
   * Vimeo:   'https://player.vimeo.com/video/XXXXXXXXX'
   * YouTube: 'https://www.youtube.com/embed/XXXXXXXXXXX'
   */
  videoUrl?: string;
  /**
   * STILL projects only.
   * Full-size image shown in lightbox. Falls back to thumbnailUrl if omitted.
   */
  imageUrl?: string;
  category: Category;
  credits?: string;
}

export const projects: Project[] = [

  // ── VIDEO PROJECTS (order here = order on site) ──────────────────────────

  {
    id: 'chi-duong-reel',
    title: 'Chi Duong Video Editor Reel',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/chi-duong-reel.png',
    videoUrl: '/videos/chi-duong-reel.mp4',
    category: 'video',
  },
  {
    id: 'forensics-classroom',
    title: 'Hands-On Forensics',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/forensics-classroom.png',
    videoUrl: '/videos/forensics-classroom.mp4',
    category: 'video',
  },
  {
    id: 'governor-wilder-birthday',
    title: 'Governor Birthday Art Event',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/governor-wilder-birthday.png',
    videoUrl: '/videos/governor-wilder-birthday.mp4',
    category: 'video',
  },
  {
    id: 'blind-box-giveaway',
    title: 'Blind Box Friendship Giveaway',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/blind-box-giveaway.jpg',
    videoUrl: '/videos/blind-box-giveaway.MOV',
    category: 'video',
  },
  {
    id: 'keychain-event',
    title: 'Personalize Your Keychain Event',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/keychain-event.jpg',
    videoUrl: '/videos/keychain-event.MOV',
    category: 'video',
  },
  {
    id: 'free-food-fridays-dean',
    title: 'Fridays With The Dean',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/free-food-fridays-dean.png',
    videoUrl: '/videos/free-food-fridays-dean.mp4',
    category: 'video',
  },
  {
    id: 'public-service-leaders',
    title: 'Future Leaders At The Capitol',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/public-service-leaders.png',
    videoUrl: '/videos/public-service-leaders.mp4',
    category: 'video',
  },
  {
    id: 'trinket-lovers',
    title: 'For Your Trinket Besties',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/trinket-lovers.jpg',
    videoUrl: '/videos/trinket-lovers.MOV',
    category: 'video',
  },
  {
    id: 'undergrad-programs',
    title: 'All About Our Undergraduate Programs',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/undergrad-programs.png',
    videoUrl: '/videos/undergrad-programs.mp4',
    category: 'video',
  },
  {
    id: 'collectors-freebie',
    title: 'Collectors Favorite Freebie Weekend',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/collectors-freebie.jpg',
    videoUrl: '/videos/collectors-freebie.MOV',
    category: 'video',
  },

  // ── STILL / SOCIAL MEDIA PROJECTS ────────────────────────────────────────

  {
    id: 'store-product-drop',
    title: 'Store Product Drop Carousel Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/store-product-drop.jpg',
    imageUrl: '/images/store-product-drop.jpg',
    category: 'still',
  },
  {
    id: 'wilder-school-magazine',
    title: 'Wilder School in Action Magazine Feature',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/wilder-school-magazine.jpg',
    imageUrl: '/images/wilder-school-magazine.jpg',
    category: 'still',
  },
  {
    id: 'website-launch',
    title: 'Website Launch Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/website-launch.jpg',
    imageUrl: '/images/website-launch.jpg',
    category: 'still',
  },
  {
    id: 'fema-emergency-qa',
    title: 'FEMA Emergency Response Q&A Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/fema-emergency-qa.jpg',
    imageUrl: '/images/fema-emergency-qa.jpg',
    category: 'still',
  },
  {
    id: 'monthly-lunch-learn',
    title: 'Monthly Lunch and Learn Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/monthly-lunch-learn.jpg',
    imageUrl: '/images/monthly-lunch-learn.jpg',
    category: 'still',
  },
  {
    id: 'appam-colleagues',
    title: 'Our Colleagues at APPAM Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/appam-colleagues.jpg',
    imageUrl: '/images/appam-colleagues.jpg',
    category: 'still',
  },
  {
    id: 'free-food-fridays-post',
    title: 'Free Food Fridays Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/free-food-fridays-post.jpg',
    imageUrl: '/images/free-food-fridays-post.jpg',
    category: 'still',
  },
];
