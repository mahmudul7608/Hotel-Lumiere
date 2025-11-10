<template>
  <div>
    <section class="border-b border-white/10 bg-white/[0.02]">
      <BaseContainer>
        <div class="py-16">
          <h1 class="text-4xl font-semibold">About</h1>
          <p class="mt-3 max-w-2xl text-white/70">
            Our story, heritage, and commitment to impeccable hospitality.
          </p>
        </div>
      </BaseContainer>
    </section>
    <BaseContainer>
      <div class="grid gap-12 py-12 md:grid-cols-2">
        <p class="text-white/80">
          Founded in the heart of Paris, Hôtel Lumière embodies classic elegance
          with contemporary comfort. Our award-winning service and curated
          experiences offer a refined stay for discerning guests.
        </p>
        <div>
          <h2 class="font-display text-2xl">Awards</h2>
          <ul class="mt-4 space-y-2 text-white/70">
            <li>Condé Nast Traveler Gold List 2024</li>
            <li>Michelin Guide Recommended Dining</li>
            <li>World Luxury Hotel Awards — Europe</li>
          </ul>
        </div>
      </div>
      <TeamGrid />
      <Testimonials />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import TeamGrid from "~/components/about/TeamGrid.vue";
import Testimonials from "~/components/home/Testimonials.vue";
</script>
