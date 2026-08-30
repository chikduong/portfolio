// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD OR EDIT A PROJECT
//
// 1. Add a new object to the array below.
// 2. Drop the thumbnail in:  public/thumbnails/<filename>.jpg
// 3. For VIDEO projects:
//    - If hosting locally:  drop the file in public/videos/<filename>.mp4
//      and set videoUrl: '/videos/<filename>.mp4'
//    - If hosting on Vimeo: set videoUrl to the embed URL, e.g.
//      'https://player.vimeo.com/video/XXXXXXXXX'
//    - If hosting on YouTube: set videoUrl to the embed URL, e.g.
//      'https://www.youtube.com/embed/XXXXXXXXXXX'
// 4. For STILL projects:
//    - Drop the full-size image in public/images/<filename>.jpg
//      and set imageUrl: '/images/<filename>.jpg'
//    - If imageUrl is omitted, the lightbox will enlarge the thumbnail.
//
// NOTE: Video files are excluded from Git (see .gitignore).
// Commit thumbnails and images — they are small enough.
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
  /** Path to thumbnail image (placed in public/thumbnails/) */
  thumbnailUrl: string;
  /**
   * VIDEO projects only.
   * Local path: '/videos/filename.mp4'
   * Vimeo embed:   'https://player.vimeo.com/video/XXXXXXXXX'
   * YouTube embed: 'https://www.youtube.com/embed/XXXXXXXXXXX'
   */
  videoUrl?: string;
  /**
   * STILL projects only.
   * Full-size image shown in the lightbox.
   * Falls back to thumbnailUrl if omitted.
   */
  imageUrl?: string;
  category: Category;
  credits?: string;
}

export const projects: Project[] = [

  // ── VIDEO PROJECTS ──────────────────────────────────────────────────────────

  {
    id: 'chi-duong-reel',
    title: 'Chi Duong Video Editor Reel',
    description: 'A highlight reel showcasing video editing work across broadcast, social media, and institutional storytelling.',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/chi-duong-reel.jpg',
    videoUrl: '/videos/ChiDuongVideoEditorREEL.mp4',
    category: 'video',
  },
  {
    id: 'forensics-classroom',
    title: 'Hands-On Forensics in the Classroom',
    description: '',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/forensics-classroom.jpg',
    videoUrl: '/videos/FORENSIC-CRIME-SCENE-INVESTIGATION.mp4',
    category: 'video',
  },
  {
    id: 'governor-wilder-birthday',
    title: "Governor Wilder's Birthday of Art and Legacy",
    description: '',
    role: 'Video Editor',
    client: 'L. Douglas Wilder School of Government and Public Affairs',
    year: 2024,
    thumbnailUrl: '/thumbnails/governor-wilder-birthday.jpg',
    videoUrl: '/videos/Gov-Birthday-Art-Exhibit-Reel.mp4',
    category: 'video',
  },
  {
    id: 'blind-box-giveaway',
    title: 'Blind Box Friendship Giveaway',
    description: '',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/blind-box-giveaway.jpg',
    videoUrl: '/videos/Blind-Box-Friendship-Giveaway.mp4',
    category: 'video',
  },
  {
    id: 'free-food-fridays-dean',
    title: 'Free Food Fridays with The Dean',
    description: '',
    role: 'Video Editor',
    client: 'L. Douglas Wilder School of Government and Public Affairs',
    year: 2024,
    thumbnailUrl: '/thumbnails/free-food-fridays-dean.jpg',
    videoUrl: '/videos/Free-Food-Fridays-Short.mp4',
    category: 'video',
  },
  {
    id: 'keychain-event',
    title: 'Personalize Your Keychain Event',
    description: '',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/keychain-event.jpg',
    videoUrl: '/videos/Personalize-Your-Keychain-Event.mp4',
    category: 'video',
  },
  {
    id: 'public-service-leaders',
    title: 'Public Service Leaders in the Making',
    description: '',
    role: 'Video Editor',
    client: 'L. Douglas Wilder School of Government and Public Affairs',
    year: 2024,
    thumbnailUrl: '/thumbnails/public-service-leaders.jpg',
    videoUrl: '/videos/Capitol-Semester-Joseph-Levy.mp4',
    category: 'video',
  },
  {
    id: 'trinket-lovers',
    title: 'Trinket Lovers Promotion',
    description: '',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/trinket-lovers.jpg',
    videoUrl: '/videos/Trinket-Lovers-Tale.mp4',
    category: 'video',
  },
  {
    id: 'undergrad-programs',
    title: 'Wilder School Undergraduate Programs Compilation',
    description: '',
    role: 'Video Editor',
    client: 'L. Douglas Wilder School of Government and Public Affairs',
    year: 2024,
    thumbnailUrl: '/thumbnails/undergrad-programs.jpg',
    videoUrl: '/videos/Undergrad-Programs-Info-Master-Reel.mp4',
    category: 'video',
  },
  {
    id: 'collectors-freebie',
    title: 'Collectors Favorite Freebie Weekend',
    description: '',
    role: 'Video Editor',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/collectors-freebie.jpg',
    videoUrl: '/videos/Collectors-Favorite-Freebie-Weekend.mp4',
    category: 'video',
  },

  // ── STILL / SOCIAL MEDIA PROJECTS ───────────────────────────────────────────

  {
    id: 'store-product-drop',
    title: 'Store Product Drop Carousel Post',
    description: '',
    role: 'Content Creator',
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
    role: 'Content Creator',
    client: 'L. Douglas Wilder School of Government and Public Affairs',
    year: 2024,
    thumbnailUrl: '/thumbnails/wilder-school-magazine.jpg',
    imageUrl: '/images/wilder-school-magazine.jpg',
    category: 'still',
  },
  {
    id: 'website-launch',
    title: 'Website Launch Post',
    description: '',
    role: 'Content Creator',
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
    role: 'Content Creator',
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
    role: 'Content Creator',
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
    role: 'Content Creator',
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
    role: 'Content Creator',
    client: '',
    year: 2024,
    thumbnailUrl: '/thumbnails/free-food-fridays-post.jpg',
    imageUrl: '/images/free-food-fridays-post.jpg',
    category: 'still',
  },
];
