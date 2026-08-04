export const brand = {
  name: "SwadIra",
  nameDev: "स्वाद",
  nameEn: "SwadIra",
  tagline: "A Legacy by Mr. Sanjay Naidu",
  parent: "Sanjay Naidu Caterers",
  parentFounded: "1990",
  brandFounded: "2026",
  phone: "+91 93719 88960",
  email: "hello@swaadira.com",
  address: "Dharampeth, Nagpur, Maharashtra 440010",
  instagram: "@swaad.ira",
  website: "swaadira.com",
  hours: "Open daily · 9:00 AM – 10:00 PM",
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/menus", label: "Menus" },
  { href: "/#darbar", label: "Darbar" },
  { href: "/build-your-menu", label: "Plan Event" },
  { href: "/#contact", label: "Contact" },
];

export const services = [
  {
    number: "01",
    title: "Weddings",
    desc: "Haldi to reception — orchestrated flavours for 200 to 5,000 guests, with live stations, regional thalis and heritage recipes.",
  },
  {
    number: "02",
    title: "Corporate",
    desc: "Boardroom lunches, product launches and gala dinners tailored with international menus, plated service and impeccable timing.",
  },
  {
    number: "03",
    title: "Private",
    desc: "Birthdays, anniversaries and intimate dinners crafted around your story — small-batch menus with the warmth of a home kitchen.",
  },
  {
    number: "04",
    title: "Destination",
    desc: "Travelling kitchens across Maharashtra and central India — Pachmarhi, Tadoba, Khajuraho — same soul, wherever the celebration unfolds.",
  },
];

export const milestones = [
  {
    year: "1990",
    title: "Sanjay Naidu Caterers is Born",
    desc: "Sanjay Naidu founds Sanjay Naidu Caterers in Nagpur — a small family kitchen with a big promise.",
  },
  {
    year: "2005",
    title: "Gondwana Club",
    desc: "Awarded the in-house catering contract at the historic Gondwana Club — a proud 15-year run serving Nagpur's most respected members.",
  },
  {
    year: "2015",
    title: "Darbar Restaurant",
    desc: "Opened Darbar Restaurant inside Rameson's Hotel — bringing our wedding-grade kitchen to daily diners.",
  },
  {
    year: "2026",
    title: "SwadIra is Born",
    desc: "After 35+ years of Sanjay Naidu Caterers, the next chapter begins — SwadIra, a modern legacy brand carrying forward the same recipes and standards.",
  },
];

export const darbar = {
  name: "Darbar",
  location: "Rameson's Hotel, Nagpur",
  tagline: "Our restaurant. Open every day.",
  body: "The same recipes we cook for royal weddings — served on a plate, at a table, for you. Come taste Sanjay ji's Saoji mutton, Awadhi biryani and live-tandoor kebabs any evening of the week.",
  hours: "Lunch 12:30 – 3:00 PM · Dinner 7:00 – 11:00 PM",
  cta: "Reserve a Table",
};

// ─────────────────────────────────────────────────────────────────
// Menu — categories with only *sample* dishes on display.
// The full master menu book is offered on request via the CTA.
// ─────────────────────────────────────────────────────────────────
export const menuCategories = [
  {
    slug: "wedding",
    number: "01",
    title: "Wedding Menus",
    kicker: "Sangeet · Haldi · Reception",
    desc: "Multi-course wedding thalis with live stations, regional signatures and hand-picked desserts, curated for 200 to 5,000 guests.",
    image:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Saoji Mutton · Vidarbha classic",
      "Dum Awadhi Biryani",
      "Paneer Lababdar",
      "Puran Poli & Basundi",
    ],
  },
  {
    slug: "corporate",
    number: "02",
    title: "Corporate Menus",
    kicker: "Boardroom · Gala · Launch",
    desc: "Plated and buffet menus with international touches, timed to your run-of-show — from boardroom lunches to award-night galas.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Executive Plated Lunch",
      "Mediterranean Live Station",
      "Continental Grill",
      "Artisan Coffee Bar",
    ],
  },
  {
    slug: "premium",
    number: "03",
    title: "Premium Menus",
    kicker: "Signature · Curated",
    desc: "Our chef's personal shortlist — small-plate tasting menus, single-origin ingredients and heritage recipes reserved for special evenings.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Kashmiri Wazwan Tasting",
      "Nizami 9-Course Menu",
      "Saoji Degustation",
      "Hand-Pounded Kebab Platter",
    ],
  },
  {
    slug: "traditional",
    number: "04",
    title: "Traditional Menus",
    kicker: "Vidarbha · Maharashtrian",
    desc: "Family recipes passed down three generations — Varhadi, Saoji, Konkan and Maharashtrian classics served the way home cooks intended.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Grand Vidarbha Thali",
      "Zunka Bhakri & Thecha",
      "Patodi Rassa",
      "Varhadi Bharli Vangi",
    ],
  },
  {
    slug: "live-counters",
    number: "05",
    title: "Live Counter Options",
    kicker: "Chaat · Tandoor · Global",
    desc: "Interactive live stations manned by our chefs — from Bombay chaat carts to open-flame tandoor pits and wok-tossed pan-Asian bars.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Bombay Chaat Cart",
      "Live Tandoor Pit",
      "Pan-Asian Wok Bar",
      "Chettinad Dosa Station",
    ],
  },
  {
    slug: "high-tea",
    number: "06",
    title: "High Tea & Snacks",
    kicker: "Afternoon · Cocktail",
    desc: "Delicate finger food, kebab platters and artisan tea services designed for engagements, kitty parties and cocktail evenings.",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Assorted Silver Kebab Platter",
      "Cucumber & Mint Tea Sandwich",
      "Masala Chai Kettle Service",
      "Mini Pav Bhaji Slider",
    ],
  },
  {
    slug: "breakfast",
    number: "07",
    title: "Breakfast Menus",
    kicker: "Morning · Poolside",
    desc: "Warm, comforting mornings — regional Indian breakfasts, continental spreads and live station options for stay-in weddings and retreats.",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Poha Jalebi & Filter Coffee",
      "South Indian Tiffin Counter",
      "Continental Buffet",
      "Fresh-Pressed Juice Bar",
    ],
  },
  {
    slug: "dessert-beverage",
    number: "08",
    title: "Dessert & Beverage Selections",
    kicker: "Sweets · Mocktails · Coffee",
    desc: "Signature Indian mithai, plated western desserts, mocktail bars, artisan coffee counters and hand-crafted paan stations.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1400&q=80",
    samples: [
      "Puran Poli & Basundi",
      "Rose Kulfi Falooda",
      "Live Jalebi Kadhai",
      "Signature Mocktail Bar",
    ],
  },
];

// Build-Your-Menu form vocabulary
export const eventTypes = [
  "Wedding",
  "Reception",
  "Sangeet / Haldi",
  "Engagement",
  "Corporate Event",
  "Birthday",
  "Private Dinner",
  "Destination Event",
];

export const cuisineOptions = [
  "North Indian",
  "South Indian",
  "Maharashtrian / Vidarbha",
  "Mughlai / Awadhi",
  "Chinese",
  "Continental",
  "Live Counters",
  "Chef's Choice",
];

export const testimonials = [
  {
    quote:
      "Sanjay ji fed 1,800 guests at our daughter's wedding — the Saoji mutton had our Delhi relatives asking for recipes we cannot share.",
    name: "Anjali & Rohit Deshmukh",
    role: "Wedding · Civil Lines, Nagpur",
  },
  {
    quote:
      "We have been booking Sanjay ji since the early 90s — first our wedding, then my son's. The kitchen has evolved into SwadIra, but the flavours are exactly as I remember them.",
    name: "Vikramaditya Rao",
    role: "Family Celebration · Ramdaspeth",
  },
  {
    quote:
      "The live chaat counter and the Vidarbha thali got a standing ovation from our Tokyo clients. A masterclass in Indian hospitality.",
    name: "Priya Sharma",
    role: "Corporate Gala · Hotel Radisson Blu",
  },
  {
    quote:
      "For 15 years at the Gondwana Club, Sanjay ji's team never missed a beat. Members still ask when their kitchen is coming back.",
    name: "Col. R. K. Menon (Retd.)",
    role: "Former Committee Member · Gondwana Club",
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    alt: "Thali spread",
    title: "The Grand Vidarbha Thali",
    tag: "Wedding · Civil Lines",
  },
  {
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1200&q=80",
    alt: "Biryani pot",
    title: "Dum Awadhi Biryani",
    tag: "Signature Dish",
  },
  {
    src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80",
    alt: "Wedding mandap",
    title: "Deshmukh Nuptials · 1,800 Guests",
    tag: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
    alt: "Sweets platter",
    title: "Puran Poli & Basundi",
    tag: "Dessert Counter",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80",
    alt: "Tandoor kebabs",
    title: "Live Tandoor Pit",
    tag: "Corporate Gala",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    alt: "Chaat counter",
    title: "Bombay Chaat Cart",
    tag: "Cocktail Reception",
  },
];

export const stats = [
  { value: 35, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "", label: "Years at Gondwana Club" },
  { value: 2400, suffix: "+", label: "Events Catered" },
  { value: 180, suffix: "+", label: "Kitchen Artisans" },
];
