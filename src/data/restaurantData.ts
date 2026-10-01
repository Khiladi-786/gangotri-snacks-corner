export interface MenuItem {
  id: string;
  name: string;
  marathiName?: string;
  description: string;
  category: 'specialities' | 'local' | 'snacks' | 'beverages';
  isPopular?: boolean;
  tag?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  marathiTitle?: string;
  category: 'all' | 'architecture' | 'dining' | 'food' | 'signboard';
  imageUrl: string;
  caption: string;
}

export interface RestaurantConfig {
  businessName: string;
  marathiName: string;
  signboardName: string;
  tagline: string;
  marathiTagline: string;
  eyebrow: string;
  sinceYear: number;
  phone: string;
  formattedPhone: string;
  address: {
    plusCode: string;
    road: string;
    village: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  googleMapsUrl: string;
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    locationBadge: string;
  };
  heritage: {
    title: string;
    marathiTitle: string;
    heading: string;
    copyParagraphs: string[];
    image: string;
    badgeText: string;
  };
  signatureVisual: {
    statement: string;
    subtext: string;
    image: string;
  };
  foodSection: {
    heading: string;
    subheading: string;
    marathiHeading: string;
    disclaimer: string;
    ctaText: string;
    signboardImage: string;
    foodImage: string;
  };
  atmosphere: {
    heading: string;
    subheading: string;
    bgImage: string;
    cards: Array<{
      number: string;
      title: string;
      marathiTitle: string;
      description: string;
    }>;
  };
  menuCategories: Array<{
    id: string;
    name: string;
    marathiName: string;
  }>;
  menuItems: MenuItem[];
  galleryItems: GalleryItem[];
  reviews: {
    title: string;
    subtitle: string;
    googleMapsUrl: string;
    ctaText: string;
  };
  location: {
    title: string;
    marathiTitle: string;
    description: string;
    landmarks: string[];
  };
}

export const restaurantData: RestaurantConfig = {
  businessName: "Gangotri Snacks Corner",
  marathiName: "गंगोत्री स्नॅक्स कॉर्नर",
  signboardName: "Hotel Gangotri (हॉटेल गंगोत्री)",
  tagline: "HOTEL • FAMILY DINING",
  marathiTagline: "चव • परंपरा • आपुलकी",
  eyebrow: "AUTHENTIC MAHARASHTRIAN ROAD-SIDE DINING",
  sinceYear: 1987,
  phone: "+919307474925",
  formattedPhone: "+91 93074 74925",
  address: {
    plusCode: "796Q+436",
    road: "Shirur-Sangavi Rd",
    village: "Korhale Bk, Loni Bhapkar",
    district: "Pune District",
    state: "Maharashtra",
    pincode: "412204",
    fullAddress: "796Q+436, Shirur-Sangavi Rd, Korhale Bk, Loni Bhapkar, Maharashtra 412204"
  },
  googleMapsUrl: "https://maps.app.goo.gl/T1tarJzTfm7niuK67",
  hero: {
    headline: "Good Food. Warm Hospitality.",
    subheadline: "A welcoming family restaurant on Shirur–Sangavi Road.",
    backgroundImage: "/images/hero.png",
    locationBadge: "KORHALE BK • LONI BHAPKAR • MAHARASHTRA"
  },
  heritage: {
    title: "WELCOME TO GANGOTRI",
    marathiTitle: "आपले सहर्ष स्वागत आहे",
    heading: "A Taste of Maharashtra, Served with Warmth.",
    copyParagraphs: [
      "Located on Shirur-Sangavi Road in Korhale Bk, Gangotri Snacks Corner (Hotel Gangotri) provides a peaceful open-air destination for delicious local meals, hot snacks, and relaxed family dining.",
      "With traditional terracotta architecture, clay-tiled roofs, intricate white decorative borders, and warm lantern lighting, our property combines rustic Maharashtrian heritage with an inviting atmosphere."
    ],
    image: "/images/entrance.png",
    badgeText: "SINCE 1987"
  },
  signatureVisual: {
    statement: "Rooted in Tradition",
    subtext: "From its distinctive terracotta architecture to its warm outdoor dining atmosphere, Gangotri carries a character of its own.",
    image: "/images/interior.png"
  },
  foodSection: {
    heading: "From Our Kitchen",
    subheading: "Specialities & favourites inspired by Maharashtra.",
    marathiHeading: "खास महाराष्ट्रीयन थाळी व स्वादिष्ठ नाश्ता",
    disclaimer: "Menu items & availability may vary daily. Please call us for today's menu and availability.",
    ctaText: "CALL FOR TODAY'S MENU",
    signboardImage: "/images/signboard.png",
    foodImage: "/images/food-thali.png"
  },
  atmosphere: {
    heading: "More Than a Stop.",
    subheading: "A place to pause, eat and enjoy the atmosphere.",
    bgImage: "/images/interior.png",
    cards: [
      {
        number: "01",
        title: "OPEN-AIR DINING",
        marathiTitle: "प्रसन्न व हवेशीर वातावरण",
        description: "Spacious courtyard dining surrounded by terracotta pots, green foliage, and natural countryside breeze."
      },
      {
        number: "02",
        title: "FAMILY FRIENDLY",
        marathiTitle: "कौटुंबिक वातावरण",
        description: "A comfortable, welcoming environment tailored for family meals, group dining, and travelers."
      },
      {
        number: "03",
        title: "TRADITIONAL CHARACTER",
        marathiTitle: "पारंपारिक वास्तुकला",
        description: "Rustic terracotta brick walls, clay-tiled roofs, white ornamental borders, and warm lantern glow."
      }
    ]
  },
  menuCategories: [
    { id: "specialities", name: "SPECIAL THALIS", marathiName: "स्पेशल थाळी" },
    { id: "local", name: "LOCAL FAVOURITES", marathiName: "लोकप्रिय पदार्थ" },
    { id: "snacks", name: "SNACKS", marathiName: "नाश्ता" },
    { id: "beverages", name: "BEVERAGES", marathiName: "पेये" }
  ],
  menuItems: [
    {
      id: "mutton-thali",
      name: "Special Mutton Thali",
      marathiName: "स्पेशल मटण थाळी",
      description: "Traditional Maharashtrian mutton curry thali served with freshly baked Bhakri or Chapati, spicy rassa, rice, and fresh onion salad.",
      category: "specialities",
      isPopular: true,
      tag: "House Speciality",
      image: "/images/food-thali.png"
    },
    {
      id: "chicken-thali",
      name: "Special Chicken Thali",
      marathiName: "स्पेशल चिकन थाळी",
      description: "Flavorful chicken thali prepared with regional Maharashtrian spices, choice of Bhakri or Chapati, rassa gravy, and rice.",
      category: "specialities",
      isPopular: true,
      tag: "Popular",
      image: "/images/signboard.png"
    },
    {
      id: "fish-thali",
      name: "Special Fish Thali",
      marathiName: "स्पेशल मासे थाळी",
      description: "Crispy fried fish and curry thali accompanied by hot Bhakri, rassa gravy, and steamed rice.",
      category: "specialities",
      isPopular: true,
      tag: "Fresh Speciality",
      image: "/images/food-thali.png"
    },
    {
      id: "egg-masala",
      name: "Egg Masala",
      marathiName: "अंडी मसाला",
      description: "Boiled eggs simmered in rich, spicy Maharashtrian onion and tomato masala gravy.",
      category: "local"
    },
    {
      id: "bhakri-roti",
      name: "Bhakri, Chapati & Roti",
      marathiName: "भाकरी व चपाती",
      description: "Freshly patted Jowar / Bajra Bhakri baked over open flame, or soft homemade Chapatis.",
      category: "local",
      isPopular: true
    },
    {
      id: "chicken-fry",
      name: "Chicken Sukka & Fry",
      marathiName: "चिकन सुक्का",
      description: "Pan-roasted spicy dry chicken cooked with roasted coconut and Maharashtrian spices.",
      category: "local"
    },
    {
      id: "poha-misal",
      name: "Fresh Roadside Snacks",
      marathiName: "गरमागरम नाश्ता",
      description: "Hot, freshly prepared snacks for roadside travelers and local guests.",
      category: "snacks"
    },
    {
      id: "tea-coffee",
      name: "Special Masala Tea & Beverages",
      marathiName: "स्पेशल मसाला चहा",
      description: "Aromatic Maharashtrian spicy tea and cold beverages for a quick roadside refresh.",
      category: "beverages"
    }
  ],
  galleryItems: [
    {
      id: "g1",
      title: "Gangotri Snacks Corner",
      marathiTitle: "हॉटेल गंगोत्री",
      category: "architecture",
      imageUrl: "/images/hero.png",
      caption: "A welcoming roadside destination surrounded by warm architecture and greenery."
    },
    {
      id: "g2",
      title: "The Gangotri Entrance",
      marathiTitle: "स्वागत प्रवेशद्वार",
      category: "architecture",
      imageUrl: "/images/entrance.png",
      caption: "A traditional entrance with terracotta architecture and landscaped surroundings."
    },
    {
      id: "g3",
      title: "Our Signature Signboard",
      marathiTitle: "मुख्य माहिती फलक",
      category: "signboard",
      imageUrl: "/images/signboard.png",
      caption: "Discover the dishes and identity that represent Hotel Gangotri."
    },
    {
      id: "g4",
      title: "Dining Experience",
      marathiTitle: "हवेशीर बैठक व्यवस्था",
      category: "dining",
      imageUrl: "/images/interior.png",
      caption: "A spacious dining area with traditional roofing and a warm atmosphere."
    },
    {
      id: "g5",
      title: "Open-Air Dining",
      marathiTitle: "इमारत व परिसर",
      category: "architecture",
      imageUrl: "/images/exterior.png",
      caption: "Enjoy the restaurant's open-air setting surrounded by greenery."
    },
    {
      id: "g6",
      title: "Maharashtrian Special Thali",
      marathiTitle: "महाराष्ट्रीयन स्पेशल थाळी",
      category: "food",
      imageUrl: "/images/food-thali.png",
      caption: "Traditional thali meal served with Bhakri, rassa, and traditional sides."
    }
  ],
  reviews: {
    title: "Guests of Gangotri",
    subtitle: "See what visitors have shared on Google.",
    googleMapsUrl: "https://maps.app.goo.gl/T1tarJzTfm7niuK67",
    ctaText: "VIEW GOOGLE REVIEWS →"
  },
  location: {
    title: "Find Gangotri",
    marathiTitle: "आमचा पत्ता",
    description: "Located along Shirur-Sangavi Road in Korhale Bk, near Loni Bhapkar. A convenient roadside dining stop for families and highway travelers.",
    landmarks: [
      "Shirur-Sangavi Road, Korhale Bk",
      "Loni Bhapkar, Maharashtra 412204",
      "Plus Code: 796Q+436"
    ]
  }
};
