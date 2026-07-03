import { defineCollection, z } from "astro:content";

const localizedText = z.object({
  en: z.string(),
  te: z.string().optional()
});

const imageItem = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional()
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    date: z.coerce.date().optional(),
    category: z.string(),
    location: z.string(),
    summary: localizedText,
    coverImage: z.string(),
    photos: z.array(imageItem).default([]),
    sponsors: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    published: z.boolean().default(true)
  })
});

const dailySponsors = defineCollection({
  type: "content",
  schema: z.object({
    date: z.coerce.date(),
    sponsorName: z.string(),
    occasion: z.string(),
    mealType: z.string(),
    note: localizedText,
    photos: z.array(imageItem).default([]),
    published: z.boolean().default(true)
  })
});

const albums = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    date: z.coerce.date().optional(),
    category: z.string(),
    coverImage: z.string(),
    summary: localizedText,
    photos: z.array(imageItem).default([]),
    published: z.boolean().default(true)
  })
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    date: z.coerce.date().optional(),
    summary: localizedText,
    coverImage: z.string().optional(),
    published: z.boolean().default(true)
  })
});

const certificates = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    issuer: z.string(),
    date: z.coerce.date().optional(),
    file: z.string().optional(),
    image: z.string().optional(),
    status: localizedText.optional(),
    publicNumber: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(50),
    published: z.boolean().default(true)
  })
});

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    image: z.string().optional(),
    quote: localizedText,
    published: z.boolean().default(true)
  })
});

const heroSlides = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    title: localizedText,
    caption: localizedText,
    image: z.string(),
    alt: localizedText,
    order: z.number().default(0),
    published: z.boolean().default(true)
  })
});

const stories = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    title: localizedText,
    category: localizedText,
    summary: localizedText,
    image: z.string(),
    body: z.object({
      en: z.array(z.string()),
      te: z.array(z.string())
    }),
    order: z.number().default(0),
    published: z.boolean().default(true)
  })
});

const highlights = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    caption: localizedText,
    image: z.string(),
    alt: localizedText,
    order: z.number().default(0),
    published: z.boolean().default(true)
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    description: localizedText,
    heroImage: z.string().optional(),
    updated: z.coerce.date().optional(),
    published: z.boolean().default(true)
  })
});

const donationSettings = defineCollection({
  type: "data",
  schema: z.object({
    razorpayPaymentLink: z.string().url().optional(),
    upiId: z.string().optional(),
    upiName: z.string().optional(),
    bankName: z.string().optional(),
    accountName: z.string().optional(),
    accountNumber: z.string().optional(),
    ifsc: z.string().optional(),
    qrImage: z.string().optional(),
    receiptNote: localizedText
  })
});

export const collections = {
  events,
  dailySponsors,
  albums,
  articles,
  certificates,
  testimonials,
  heroSlides,
  highlights,
  stories,
  pages,
  donationSettings
};
