<template>
  <div class="bg-black">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden border-b border-white/10 bg-white/[0.02]"
    >
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
          class="h-full w-full object-cover opacity-20"
          alt="Hotel Interior"
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
            Our Rooms
          </h1>
          <p class="max-w-2xl text-white/80 text-lg">
            Discover our elegant collection of rooms and suites, each designed
            for comfort and luxury.
          </p>
        </div>
      </BaseContainer>
    </section>

    <!-- Rooms Grid -->
    <BaseContainer>
      <div class="py-12 md:py-16">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            v-for="room in allRooms"
            :key="room.id"
            class="group overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:ring-2 bg-white/5 hover:bg-white/8 hover:shadow-2xl hover:shadow-black/50 cursor-pointer"
            @click="goToBooking(room)"
          >
            <div class="relative overflow-hidden">
              <img
                :src="room.image"
                :alt="room.title"
                class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />
              <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3
                  class="font-display text-2xl md:text-3xl text-white font-semibold"
                >
                  {{ room.title }}
                </h3>
              </div>
            </div>
            <div class="p-5 md:p-6 space-y-4">
              <div class="text-white/70">
                <ul class="flex flex-wrap gap-2 text-xs md:text-sm">
                  <li
                    v-for="(feature, i) in room.features"
                    :key="i"
                    class="rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="flex items-center justify-between pt-2">
                <div class="text-2xl md:text-3xl font-semibold text-white">
                  €{{ room.price
                  }}<span class="text-sm md:text-base text-white/60 font-normal"
                    >/night</span
                  >
                </div>
                <button
                  @click="goToBooking(room)"
                  class="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const allRooms = [
  {
    id: "classic",
    title: "Classic Room",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop",
    features: ["22 m²", "City view", "Queen bed"],
    amenities: ["Wi-Fi", "Air conditioning", "Mini bar", "Safe", "TV"],
    description:
      "Elegant and comfortable room with city views, perfect for a relaxing stay in Paris.",
  },
  {
    id: "deluxe",
    title: "Deluxe Room",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    features: ["28 m²", "Balcony", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Balcony",
      "Bath",
    ],
    description:
      "Spacious room with private balcony, offering stunning views and premium comfort.",
  },
  {
    id: "suite",
    title: "Executive Suite",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1400&auto=format&fit=crop",
    features: ["45 m²", "Lounge", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Lounge area",
      "Work desk",
      "Bath",
    ],
    description:
      "Luxurious suite with separate lounge area, ideal for business or extended stays.",
  },
  {
    id: "premium",
    title: "Premium Room",
    price: 330,
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1400&auto=format&fit=crop",
    features: ["32 m²", "High floor", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Coffee machine",
      "Bath",
    ],
    description:
      "Premium room on high floor with panoramic city views and enhanced amenities.",
  },
  {
    id: "junior-suite",
    title: "Junior Suite",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
    features: ["40 m²", "Lounge area", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Lounge area",
      "Bath",
      "Coffee machine",
    ],
    description:
      "Spacious junior suite with separate lounge area, perfect for relaxation.",
  },
  {
    id: "club",
    title: "Club Room",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1600607687920-4ce8c559d8df?q=80&w=1400&auto=format&fit=crop",
    features: ["Club Lounge", "Breakfast", "Snacks & coffee"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Club lounge access",
      "Breakfast",
      "Evening canapés",
    ],
    description:
      "Exclusive club room with access to private lounge and premium services.",
  },
];

function goToBooking(room: any) {
  const params = new URLSearchParams({
    room: room.title,
    price: room.price.toString(),
    features: room.features.join(","),
    amenities: room.amenities.join(","),
    description: room.description,
    image: room.image,
  });
  navigateTo(`/booking?${params.toString()}`);
}
</script>
