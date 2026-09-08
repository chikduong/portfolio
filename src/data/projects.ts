// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A PROJECT
//
// Order in this array = order displayed on the site.
//
// VIDEO projects  → set videoUrl to a local path or an embed URL:
//   Local:   `${b}videos/filename.mp4`
//   Vimeo:   'https://player.vimeo.com/video/XXXXXXXXX'
//   YouTube: 'https://www.youtube.com/embed/XXXXXXXXXXX'
//
// STILL projects  → three display modes:
//   Single image:    set imageUrl
//   Multi-page post: set images (array, first item = thumbnail)
//   PDF document:    set pdfUrl (clicking thumbnail opens the PDF)
//
// NOTE: Video files are excluded from Git (see .gitignore) — they're too large.
// Images and PDFs in public/images/ ARE committed and served from GitHub.
// ─────────────────────────────────────────────────────────────────────────────

export type Category = 'video' | 'still';

export interface Project {
  /** Unique slug — used in the URL: /video/:id */
  id: string;
  title: string;
  description: string;
  role: string;
  client: string;
  year: number;
  /** Shown in the grid. For multi-page stills, use the first page. */
  thumbnailUrl: string;
  /** VIDEO: local path or embed URL */
  videoUrl?: string;
  /** STILL — single image: path to full-size image for lightbox */
  imageUrl?: string;
  /** STILL — multi-page post: all pages in display order */
  images?: string[];
  /** STILL — document: clicking opens this PDF in a new tab */
  pdfUrl?: string;
  category: Category;
  credits?: string;
}

// Vite replaces this with '/' in dev and '/portfolio/' in production.
const b = import.meta.env.BASE_URL;

export const projects: Project[] = [

  // ── VIDEO PROJECTS ───────────────────────────────────────────────────────

  {
    id: 'chi-duong-reel',
    title: 'Chi Duong Video Editor Reel',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/chi-duong-reel.png`,
    videoUrl: `${b}videos/chi-duong-reel.mp4`,
    category: 'video',
  },
  {
    id: 'forensics-classroom',
    title: 'Hands-On Forensics',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/forensics-classroom.png`,
    videoUrl: `${b}videos/forensics-classroom.mp4`,
    category: 'video',
  },
  {
    id: 'governor-wilder-birthday',
    title: 'Governor Birthday Art Event',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/governor-wilder-birthday.png`,
    videoUrl: `${b}videos/governor-wilder-birthday.mp4`,
    category: 'video',
  },
  {
    id: 'blind-box-giveaway',
    title: 'Blind Box Friendship Giveaway',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/blind-box-giveaway.jpg`,
    videoUrl: `${b}videos/blind-box-giveaway.mp4`,
    category: 'video',
  },
  {
    id: 'keychain-event',
    title: 'Personalize Your Keychain Event',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/keychain-event.jpg`,
    videoUrl: `${b}videos/keychain-event.mp4`,
    category: 'video',
  },
  {
    id: 'free-food-fridays-dean',
    title: 'Fridays With The Dean',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/free-food-fridays-dean.png`,
    videoUrl: `${b}videos/free-food-fridays-dean.mp4`,
    category: 'video',
  },
  {
    id: 'public-service-leaders',
    title: 'Future Leaders At The Capitol',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/public-service-leaders.png`,
    videoUrl: `${b}videos/public-service-leaders.mp4`,
    category: 'video',
  },
  {
    id: 'trinket-lovers',
    title: 'For Your Trinket Besties',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/trinket-lovers.jpg`,
    videoUrl: `${b}videos/trinket-lovers.mp4`,
    category: 'video',
  },
  {
    id: 'undergrad-programs',
    title: 'All About Our Undergraduate Programs',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/undergrad-programs.png`,
    videoUrl: `${b}videos/undergrad-programs.mp4`,
    category: 'video',
  },
  {
    id: 'collectors-freebie',
    title: 'Collectors Favorite Freebie Weekend',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}thumbnails/collectors-freebie.jpg`,
    videoUrl: `${b}videos/collectors-freebie.mp4`,
    category: 'video',
  },

  // ── STILL / SOCIAL MEDIA PROJECTS ───────────────────────────────────────

  {
    id: 'store-product-drop',
    title: 'Store Product Drop Carousel Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/store-product-drop-1.jpg`,
    images: [
      `${b}images/store-product-drop-1.jpg`,
      `${b}images/store-product-drop-2.jpg`,
      `${b}images/store-product-drop-3.jpg`,
      `${b}images/store-product-drop-4.jpg`,
      `${b}images/store-product-drop-5.jpg`,
    ],
    category: 'still',
  },
  {
    id: 'leaders-in-the-making',
    title: 'Leaders In The Making Magazine Feature',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/leaders-in-the-making.jpg`,
    pdfUrl: `${b}images/leaders-in-the-making.pdf`,
    category: 'still',
  },
  {
    id: 'career-visit-promo',
    title: 'Career Visit Promo',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/career-visit-promo.jpg`,
    imageUrl: `${b}images/career-visit-promo.jpg`,
    category: 'still',
  },
  {
    id: 'fridays-with-the-dean-promo',
    title: 'Fridays With The Dean Promo',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/fridays-with-the-dean-promo.jpg`,
    imageUrl: `${b}images/fridays-with-the-dean-promo.jpg`,
    category: 'still',
  },
  {
    id: 'monthly-lunch-and-learn',
    title: 'Monthly Lunch & Learn Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/monthly-lunch-and-learn.jpg`,
    imageUrl: `${b}images/monthly-lunch-and-learn.jpg`,
    category: 'still',
  },
  {
    id: 'website-launch',
    title: 'Website Launch Announcement',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/website-launch.png`,
    imageUrl: `${b}images/website-launch.png`,
    category: 'still',
  },
  {
    id: 'emergency-responders-qa',
    title: 'Emergency Responders Q&A Post',
    description: '',
    role: '',
    client: '',
    year: 2024,
    thumbnailUrl: `${b}images/emergency-responders-qa-1.jpg`,
    images: [
      `${b}images/emergency-responders-qa-1.jpg`,
      `${b}images/emergency-responders-qa-2.jpg`,
    ],
    category: 'still',
  },
];
