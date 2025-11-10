// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0B0B0B" },
        {
          name: "description",
          content:
            "Experience pure Parisian luxury at Hôtel Lumière — a 5-star destination in the heart of Paris.",
        },
        {
          property: "og:title",
          content: "Hôtel Lumière | Luxury Stay in Paris",
        },
        {
          property: "og:description",
          content:
            "Experience pure Parisian luxury at Hôtel Lumière — a 5-star destination in the heart of Paris.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content:
            "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop",
        },
      ],
      link: [
        // Preconnects for Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap",
        },
      ],
      title: "Hôtel Lumière | Luxury Stay in Paris",
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Hôtel Lumière",
            address: {
              "@type": "PostalAddress",
              streetAddress: "12 Rue de Lumière",
              addressLocality: "Paris",
              postalCode: "75001",
              addressCountry: "FR",
            },
            telephone: "+33 1 23 45 67 89",
            image:
              "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1600&auto=format&fit=crop",
            url: "https://hotellumiere.example.com",
            priceRange: "€€€€",
            servesCuisine: "French",
            sameAs: [
              "https://instagram.com/",
              "https://facebook.com/",
              "https://www.tripadvisor.com/",
            ],
          }),
        },
      ],
    },
  },
  tailwindcss: {
    viewer: false,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  vite: {
    assetsInclude: ["**/*.mp4", "**/*.mov", "**/*.avi"],
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
});
