<template>
  <article
    class="group overflow-hidden rounded-2xl ring-1 ring-white/10 transition hover:ring-white/20"
  >
    <div class="relative">
      <img
        :src="image"
        :alt="title"
        class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      />
      <div class="absolute inset-x-0 bottom-0 p-4">
        <h3 class="font-display text-xl">{{ title }}</h3>
      </div>
    </div>
    <div class="flex items-center justify-between p-4">
      <div class="text-white/70">
        <ul class="flex flex-wrap gap-2 text-xs">
          <li
            v-for="(f, i) in features"
            :key="i"
            class="rounded-full bg-white/5 px-2 py-1"
          >
            {{ f }}
          </li>
        </ul>
      </div>
      <div class="text-right">
        <div class="text-lg">
          €{{ price }}<span class="text-xs text-white/60">/night</span>
        </div>
        <NuxtLink to="/booking">
          <BaseButton>Book</BaseButton>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  price: number;
  image: string;
  features?: string[];
}>();
</script>
