<template>
  <section class="py-16">
    <div class="grid gap-6 md:grid-cols-3">
      <div
        v-for="(t, i) in testimonials"
        :key="i"
        class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
      >
        <div class="text-white/80">“{{ t.quote }}”</div>
        <div class="mt-4 text-sm text-white/60">
          — {{ t.author }}, {{ t.source }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: "An unforgettable Parisian escape — refined and intimate.",
    author: "Sofia L.",
    source: "Google",
  },
  {
    quote: "Every detail sings luxury. The rooftop view is sublime.",
    author: "Alain D.",
    source: "Tripadvisor",
  },
  {
    quote: "Impeccable service and exquisite dining.",
    author: "Priya K.",
    source: "Booking.com",
  },
];
</script>
