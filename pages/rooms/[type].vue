<template>
  <div>
    <section class="border-b border-white/10 bg-white/[0.02]">
      <BaseContainer>
        <div class="py-16">
          <h1 class="text-4xl font-semibold">{{ current?.title }}</h1>
          <div class="mt-2 flex items-center gap-3 text-sm text-white/70">
            <div
              class="relative select-none font-semibold leading-none text-[12px]"
            >
              <span class="text-yellow-400/25">★★★★★</span>
              <span
                class="absolute inset-0 overflow-hidden"
                :style="{ width: (rating / 5) * 100 + '%' }"
              >
                <span class="text-yellow-400">★★★★★</span>
              </span>
            </div>
            <span>{{ rating.toFixed(1) }} / 5 quality</span>
          </div>
          <p class="mt-3 max-w-2xl text-white/70">
            Choose your preferred room type and complete your reservation.
          </p>
        </div>
      </BaseContainer>
    </section>
    <BaseContainer>
      <div class="grid gap-10 py-10 lg:grid-cols-[1fr_320px]">
        <div>
          <div class="mb-6 text-sm text-white/60">
            {{ current?.items.length || 0 }} options in this category
          </div>
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <RoomCard
              v-for="room in current?.items || []"
              :key="room.id"
              :title="room.title"
              :price="room.price"
              :image="room.image"
              :features="room.features"
              @select="selectRoom(room)"
            />
          </div>
          <RoomDetailsModal />
        </div>
        <aside class="lg:sticky lg:top-24">
          <div class="mb-4 text-sm font-medium text-white/80">Reserve</div>
          <BookingForm />
          <div
            v-if="selectedTitle"
            class="mt-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <div class="mb-2 text-sm text-white/70">Selected</div>
            <div class="flex items-center justify-between">
              <div class="font-medium">{{ selectedTitle }}</div>
              <NuxtLink
                :to="{ path: '/booking', query: { room: selectedTitle } }"
              >
                <BaseButton>Proceed</BaseButton>
              </NuxtLink>
            </div>
          </div>
          <div class="mt-3 text-xs text-white/60">
            Need help? Contact us for tailored recommendations.
          </div>
        </aside>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { useRoomDetails } from "~/composables/useRoomDetails";

type CatalogItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  features: string[];
  amenities?: string[];
  size?: string;
  view?: string;
};

const route = useRoute();
const { open } = useRoomDetails();
const selectedTitle = ref("");
function selectRoom(room: any) {
  selectedTitle.value = room.title;
  open(room);
}

const CATALOG: Record<string, { title: string; items: CatalogItem[] }> = {
  standard: {
    title: "Standard & Superior Rooms",
    items: [
      {
        id: "standard-1",
        title: "Standard Room",
        price: 150,
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
        features: ["20 m²", "City view", "Queen bed"],
      },
      {
        id: "superior-1",
        title: "Superior Room",
        price: 190,
        image:
          "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1400&auto=format&fit=crop",
        features: ["24 m²", "Courtyard view", "King bed"],
      },
    ],
  },
  deluxe: {
    title: "Deluxe Rooms",
    items: [
      {
        id: "deluxe-1",
        title: "Deluxe Room",
        price: 240,
        image:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1400&auto=format&fit=crop",
        features: ["28 m²", "Balcony", "King bed"],
      },
      {
        id: "deluxe-2",
        title: "Deluxe Sea View",
        price: 280,
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
        features: ["30 m²", "Sea view", "King bed"],
      },
    ],
  },
  premium: {
    title: "Premium & Executive Rooms",
    items: [
      {
        id: "premium-1",
        title: "Premium Room",
        price: 320,
        image:
          "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
        features: ["32 m²", "High floor", "King bed"],
      },
      {
        id: "executive-1",
        title: "Executive Room",
        price: 360,
        image:
          "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1400&auto=format&fit=crop",
        features: ["34 m²", "City skyline", "Executive desk"],
      },
    ],
  },
  club: {
    title: "Club & Executive Club Rooms",
    items: [
      {
        id: "club-1",
        title: "Club Room",
        price: 380,
        image:
          "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
        features: [
          "Access to Club Lounge",
          "Breakfast included",
          "Snacks & coffee",
        ],
      },
      {
        id: "club-2",
        title: "Executive Club Room",
        price: 420,
        image:
          "https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1400&auto=format&fit=crop",
        features: ["Club Lounge", "Evening canapés", "City view"],
      },
    ],
  },
  "junior-suite": {
    title: "Junior & Mini Suites",
    items: [
      {
        id: "junior-1",
        title: "Junior Suite",
        price: 450,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
        features: ["40 m²", "Lounge area", "King bed"],
      },
      {
        id: "mini-1",
        title: "Mini Suite",
        price: 430,
        image:
          "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1400&auto=format&fit=crop",
        features: ["38 m²", "Compact lounge", "City view"],
      },
    ],
  },
  suite: {
    title: "Suites & Executive Suites",
    items: [
      {
        id: "suite-1",
        title: "Suite",
        price: 520,
        image:
          "https://images.unsplash.com/photo-1521783988139-893ce0b7d7e8?q=80&w=1400&auto=format&fit=crop",
        features: ["Separate living room", "Dining area", "Eiffel view"],
      },
      {
        id: "exec-suite-1",
        title: "Executive Suite",
        price: 590,
        image:
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1400&auto=format&fit=crop",
        features: ["55 m²", "Butler service", "Top floor"],
      },
    ],
  },
  presidential: {
    title: "Presidential, Royal & Penthouse Suites",
    items: [
      {
        id: "pres-1",
        title: "Presidential Suite",
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop",
        features: ["120 m²", "Private butler", "Jacuzzi"],
      },
      {
        id: "royal-1",
        title: "Royal Suite",
        price: 1500,
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
        features: ["Panoramic view", "Grand lounge", "Two bedrooms"],
      },
      {
        id: "penthouse-1",
        title: "Penthouse Suite",
        price: 2000,
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
        features: ["Penthouse floor", "Terrace", "Private bar"],
      },
    ],
  },
};

const type = computed(() => String(route.params.type || ""));
const current = computed(() => CATALOG[type.value]);
const RATINGS: Record<string, number> = {
  standard: 3.0,
  deluxe: 3.8,
  premium: 4.2,
  club: 4.5,
  "junior-suite": 4.3,
  suite: 4.8,
  presidential: 5.0,
};
const rating = computed(() => RATINGS[type.value] || 4.0);

watchEffect(() => {
  navigateTo(
    { path: "/rooms", query: { type: type.value } },
    { replace: true }
  );
});
</script>
