<template>
  <section class="py-12" v-appear>
    <h2 class="font-display text-2xl">Our Leadership</h2>
    <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(m, i) in members"
        :key="i"
        class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
      >
        <img
          :src="m.photo"
          :alt="m.name"
          class="mb-4 aspect-[4/3] w-full rounded-xl object-cover"
          loading="lazy"
        />
        <div class="font-display text-lg">{{ m.name }}</div>
        <div class="text-sm text-white/60">{{ m.role }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const members = [
  {
    name: "Éloise Dubois",
    role: "Executive Chef",
    photo:
      "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Marc Laurent",
    role: "General Manager",
    photo:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Clara Moreau",
    role: "Guest Experience",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
];
</script>
