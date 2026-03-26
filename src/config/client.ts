export const client = {
  // Business Details
  name: "Perennial Garden Services",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Lancing.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07712 677198",
  email: "",
  website: "",

  // Location
  address: "Lancing",
  city: "Lancing",
  county: "",
  postcode: "",
  basedIn: "Lancing",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Mskisnow", rating: 5, text: "Barry did a fantastic job of cutting back the 18ft hedge at the rear of our garden as well as completely overhauling our borders. Knowing little about plants and flowers, whilst I’d made some choices, Barry advised on what would work and what wouldn’", date: "4 years ago" },
    { name: "Dot Martin", rating: 5, text: "Barry transformed our dated and tatty front garden by inspiration and hard work. With oak sleepers and slate infill we now have an upto date garden , one of the best in the road. Thankyou Barry for your hard work and ideas. We would recommend his ser", date: "10 years ago" },
    { name: "Anthony Cartmell", rating: 5, text: "Excellent service from Barry, who works harder than he really should :) As if by magic our garden suddenly becomes tidy, and all the weeds and cuttings are taken away. ", date: "14 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Perennial Garden Services | Landscaper in Lancing",
    description: "Professional landscaper in Lancing. 5.0-star rated on Google. Call for a free quote.",
  },
};
