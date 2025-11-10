<template>
  <div>
    <ParallaxHeader
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
      title="Facilities"
    />
    <BaseContainer>
      <div class="grid gap-8 py-12 md:grid-cols-2">
        <div
          class="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        >
          <img
            class="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105"
            src="https://images.unsplash.com/photo-1554252116-16d3da79aa4c?q=80&w=1600&auto=format&fit=crop"
            alt="Spa"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-display text-xl">Spa & Wellness</h3>
            <p class="mt-2 text-white/70">
              Thermal suites, sauna, and signature treatments.
            </p>
          </div>
        </div>
        <div
          class="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        >
          <img
            class="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
            alt="Gym"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-display text-xl">Fitness</h3>
            <p class="mt-2 text-white/70">
              State-of-the-art equipment and personal training.
            </p>
          </div>
        </div>
        <div
          class="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        >
          <img
            class="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105"
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
            alt="Rooftop"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-display text-xl">Rooftop Pool</h3>
            <p class="mt-2 text-white/70">
              Eiffel Tower views and sunset cocktails.
            </p>
          </div>
        </div>
        <div
          class="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        >
          <img
            class="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105"
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1600&auto=format&fit=crop"
            alt="Lounge"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="font-display text-xl">Lounge</h3>
            <p class="mt-2 text-white/70">
              A serene space for tea and evening digestifs.
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import ParallaxHeader from "~/components/facilities/ParallaxHeader.vue";
</script>
