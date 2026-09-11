// Data & Config for BLACKCUT BARBERSHOP
// All client configuration values are centralized here for simple editing.

export const SITE_CONFIG = {
  brandName: "BLACKCUT",
  tagline: "PREMIUM MEN'S GROOMING",
  whatsappNumber: "6281234567890", // [PLACEHOLDER: WhatsApp number]
  whatsappMessage: "Hi BLACKCUT, I'd like to book an appointment.",
  address: "BLACKCUT BARBERSHOP, Jl. Senopati No. 88, Jakarta, Indonesia", // [PLACEHOLDER: replace with real address]
  mapsUrl: "https://maps.google.com/?q=Senopati+Jakarta", // [PLACEHOLDER: replace with real Google Maps URL]
  phone: "+62 812-3456-7890", // [PLACEHOLDER: +62 XXX-XXXX-XXXX]
  hours: {
    weekdays: "Monday – Friday: 10:00 – 21:00",
    weekends: "Saturday – Sunday: 09:00 – 22:00"
  }, // [PLACEHOLDER: confirm real hours]
  socials: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/6281234567890?text=Hi%20BLACKCUT%2C%20I%27d%20like%20to%20book%20an%20appointment"
  }
};

export const SERVICES_DATA = [
  {
    id: "01",
    name: "Signature Haircut",
    description: "Precision haircut tailored to face shape, hair type, and personal style. Includes hot towel refresh and neck taper line-up.",
    price: "Rp 75.000",
    duration: "45 min", // [PLACEHOLDER: e.g. 45 min]
    featured: false
  },
  {
    id: "02",
    name: "Haircut + Beard",
    description: "A complete grooming session combining a precision haircut with detailed beard shaping, trim, and razor edge finish.",
    price: "Rp 110.000",
    duration: "1 hr", // [PLACEHOLDER: e.g. 1 hr]
    featured: true // Marked as featured/most booked
  },
  {
    id: "03",
    name: "Premium Styling",
    description: "A more detailed grooming experience including customized styling, hair wash, scalp massage, and premium pomade finishing.",
    price: "Rp 150.000",
    duration: "1 hr 15 min", // [PLACEHOLDER: e.g. 1 hr 15 min]
    featured: false
  }
];

export const GALLERY_DATA = [
  {
    id: 1,
    title: "Precision Skin Fade",
    category: "FADE WORK",
    aspect: "aspect-portrait",
    placeholderTag: "[PLACEHOLDER: haircut/fade close-up]",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Beard Line-Up & Trim",
    category: "BEARD DETAIL",
    aspect: "aspect-square",
    placeholderTag: "[PLACEHOLDER: beard shaping detail]",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Studio Interior & Chair",
    category: "INTERIOR DETAIL",
    aspect: "aspect-landscape",
    placeholderTag: "[PLACEHOLDER: barbershop interior detail]",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Craft Barber Tools",
    category: "EQUIPMENT",
    aspect: "aspect-square",
    placeholderTag: "[PLACEHOLDER: barber tools detail shot]",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Textured Crop Styling",
    category: "STYLING",
    aspect: "aspect-portrait",
    placeholderTag: "[PLACEHOLDER: finished haircut result]",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Hot Towel Shave Finish",
    category: "GROOMING",
    aspect: "aspect-landscape",
    placeholderTag: "[PLACEHOLDER: hands mid-cut / shave detail]",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop"
  }
];

export const WHY_US_DATA = [
  {
    number: "01",
    title: "PRECISION",
    description: "Every cut is shaped with relentless attention to detail, scalp geometry, and natural hair flow."
  },
  {
    number: "02",
    title: "CRAFTSMANSHIP",
    description: "Experienced barbers focused exclusively on technical quality, sharp lines, and consistency."
  },
  {
    number: "03",
    title: "PERSONAL STYLE",
    description: "Cuts are adapted to your individual facial features, career environment, and personal style."
  },
  {
    number: "04",
    title: "PREMIUM EXPERIENCE",
    description: "A refined grooming atmosphere designed around dark aesthetic comfort and masculine confidence."
  }
];

export const TEAM_DATA = [
  {
    id: 1,
    name: "Alex",
    role: "Senior Barber",
    specialty: "[PLACEHOLDER: Fades & Skin Fades]",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    placeholderTag: "[PLACEHOLDER: barber photo - Alex]"
  },
  {
    id: 2,
    name: "Raka",
    role: "Barber",
    specialty: "[PLACEHOLDER: Beard Sculpting & Classic Cuts]",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    placeholderTag: "[PLACEHOLDER: barber photo - Raka]"
  },
  {
    id: 3,
    name: "Dimas",
    role: "Barber",
    specialty: "[PLACEHOLDER: Precision Styling & Modern Crops]",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    placeholderTag: "[PLACEHOLDER: barber photo - Dimas]"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "[Replace with real customer testimonial]",
    clientName: "[PLACEHOLDER: Client Name]",
    subtitle: "Regular Client",
    placeholderTag: "[PLACEHOLDER: Testimonial Slot 1]"
  },
  {
    id: 2,
    quote: "[Replace with real customer testimonial]",
    clientName: "[PLACEHOLDER: Client Name]",
    subtitle: "Executive Client",
    placeholderTag: "[PLACEHOLDER: Testimonial Slot 2]"
  },
  {
    id: 3,
    quote: "[Replace with real customer testimonial]",
    clientName: "[PLACEHOLDER: Client Name]",
    subtitle: "Verified Client",
    placeholderTag: "[PLACEHOLDER: Testimonial Slot 3]"
  }
];

export const FAQ_DATA = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer: "We offer precision haircuts tailored to your facial structure, detailed beard sculpting and trimming, hot towel finishing, scalp refresh, and premium hair styling."
  },
  {
    id: "faq-2",
    question: "Do I need to make an appointment?",
    answer: "Appointments are strongly recommended to guarantee your preferred barber and zero wait time. You can book directly via WhatsApp using the buttons on this site."
  },
  {
    id: "faq-3",
    question: "How long does a haircut take?",
    answer: "A Signature Haircut takes approximately 45 minutes. A combined Haircut + Beard session takes about 60 minutes to ensure every detail is perfected."
  },
  {
    id: "faq-4",
    question: "Do you accept walk-ins?",
    answer: "Yes, we accept walk-ins based on barber availability `[PLACEHOLDER: confirm walk-in policy]`. We advise calling or messaging beforehand on busy weekend hours."
  },
  {
    id: "faq-5",
    question: "Where are you located?",
    answer: "We are located at Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan `[PLACEHOLDER: replace with real address]`. Parking space is available."
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept cash, QRIS, major debit/credit cards, and bank transfers `[PLACEHOLDER: confirm accepted payments]`."
  }
];
