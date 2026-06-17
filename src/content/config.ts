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
    date: z.coerce.date(),
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
    date: z.coerce.date(),
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
    date: z.coerce.date(),
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
    file: z.string(),
    image: z.string().optional(),
    published: z.boolean().default(true)
  })
});

const testimonials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    quote: localizedText,
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
    upiId: z.string(),
    upiName: z.string(),
    bankName: z.string(),
    accountName: z.string(),
    accountNumber: z.string(),
    ifsc: z.string(),
    qrImage: z.string(),
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
  pages,
  donationSettings
};
