<template>
  <section class="py-16">
    <div
      class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold/20 to-transparent p-10 ring-1 ring-white/10"
    >
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(197,165,114,0.15),transparent_60%)]"
      />
      <h2 class="font-display text-3xl">Book your stay now</h2>
      <p class="mt-2 max-w-xl text-white/70">
        Secure the best rates and tailored experiences when you book direct.
      </p>
      <div class="mt-6">
        <NuxtLink to="/booking">
          <BaseButton>Reserve Now</BaseButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
