<template>
  <section class="relative overflow-hidden">
    <div v-if="background" class="pointer-events-none absolute inset-0">
      <img
        :src="background"
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/50" />
    </div>
    <BaseContainer>
      <div class="relative flex flex-col items-start gap-6 py-24 md:py-36">
        <p v-if="eyebrow" class="text-gold/80">{{ eyebrow }}</p>
        <h1 class="text-4xl font-semibold leading-tight md:text-6xl">
          {{ title }}
        </h1>
        <p v-if="description" class="max-w-2xl text-white/70">
          {{ description }}
        </p>
        <div class="flex items-center gap-4 pt-2">
          <NuxtLink to="/booking">
            <BaseButton>Reserve Your Stay</BaseButton>
          </NuxtLink>
          <NuxtLink to="#rooms" class="text-sm text-white/80 hover:text-white"
            >Explore Rooms →</NuxtLink
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  background?: string;
}>();
</script>
