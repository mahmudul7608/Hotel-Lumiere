<template>
  <div class="bg-black min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden border-b border-white/10 bg-white/[0.02]"
    >
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
          class="h-full w-full object-cover opacity-20"
          alt="Hotel Gallery"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"
        />
      </div>
      <BaseContainer>
        <div class="relative z-10 py-16 md:py-20">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-4"
          >
            Gallery
          </h1>
          <p class="max-w-2xl text-white/80 text-lg">
            Explore the beauty and elegance of Hôtel Lumière through our curated
            collection of images.
          </p>
        </div>
      </BaseContainer>
    </section>

    <BaseContainer>
      <div class="py-12 md:py-16">
        <!-- Gallery Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <div
            v-for="(image, index) in displayedImages"
            :key="index"
            class="group relative overflow-hidden rounded-xl aspect-square bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            @click="openLightbox(index)"
          >
            <img
              :src="image.url"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg
                class="h-12 w-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- More Button -->
        <div v-if="hasMoreImages" class="text-center mt-12">
          <button
            @click="loadMore"
            class="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/30"
          >
            Load More
            <svg
              class="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </BaseContainer>

    <!-- Lightbox Modal -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
      @click.self="closeLightbox"
    >
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center justify-center z-10"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button
        v-if="lightboxIndex > 0"
        @click="previousImage"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center justify-center z-10"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        v-if="lightboxIndex < galleryImages.length - 1"
        @click="nextImage"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors flex items-center justify-center z-10"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div
        class="max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
      >
        <img
          :src="galleryImages[lightboxIndex].url"
          :alt="galleryImages[lightboxIndex].alt"
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imagesPerPage = 16; // 4x4 grid = 16 images
const displayedCount = ref(imagesPerPage);

// Gallery images (you can add more images here or load from API)
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1400&auto=format&fit=crop",
    alt: "Hotel Lobby",
  },
  {
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop",
    alt: "Luxury Room",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    alt: "Deluxe Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1400&auto=format&fit=crop",
    alt: "Executive Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    alt: "Restaurant",
  },
  {
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1400&auto=format&fit=crop",
    alt: "Spa",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    alt: "Pool Area",
  },
  {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop",
    alt: "Bar",
  },
  {
    url: "https://images.unsplash.com/photo-1521783988139-893ce0b7d7e8?q=80&w=1400&auto=format&fit=crop",
    alt: "Lounge",
  },
  {
    url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
    alt: "Premium Room",
  },
  {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    alt: "Junior Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1400&auto=format&fit=crop",
    alt: "Club Room",
  },
  {
    url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
    alt: "Presidential Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
    alt: "Royal Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    alt: "Dining Room",
  },
  {
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1400&auto=format&fit=crop",
    alt: "Fine Dining",
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    alt: "Lobster Dish",
  },
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop",
    alt: "Dessert",
  },
  {
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1400&auto=format&fit=crop",
    alt: "Spa Treatment",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    alt: "Outdoor Pool",
  },
  {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop",
    alt: "Cocktail Bar",
  },
  {
    url: "https://images.unsplash.com/photo-1521783988139-893ce0b7d7e8?q=80&w=1400&auto=format&fit=crop",
    alt: "Executive Lounge",
  },
  {
    url: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
    alt: "City View Room",
  },
  {
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    alt: "Suite Balcony",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1400&auto=format&fit=crop",
    alt: "Club Lounge",
  },
  {
    url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
    alt: "Penthouse View",
  },
  {
    url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
    alt: "Grand Ballroom",
  },
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    alt: "Wine Cellar",
  },
  {
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1400&auto=format&fit=crop",
    alt: "Chef Kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    alt: "Gourmet Dining",
  },
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop",
    alt: "Pastry Display",
  },
  {
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1400&auto=format&fit=crop",
    alt: "Wellness Center",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    alt: "Poolside",
  },
  {
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop",
    alt: "Night Bar",
  },
];

const displayedImages = computed(() => {
  return galleryImages.slice(0, displayedCount.value);
});

const hasMoreImages = computed(() => {
  return displayedCount.value < galleryImages.length;
});

const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

function loadMore() {
  displayedCount.value += imagesPerPage;
}

function openLightbox(index: number) {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function nextImage() {
  if (lightboxIndex.value < galleryImages.length - 1) {
    lightboxIndex.value++;
  }
}

function previousImage() {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--;
  }
}

// Keyboard navigation
onMounted(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (lightboxOpen.value) {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        previousImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    }
  };
  window.addEventListener("keydown", handleKeyPress);
  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });
});
</script>
