<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[120]">
      <div class="absolute inset-0 bg-black/80" @click="close" />
      <div
        class="absolute inset-0 mx-auto flex max-w-5xl items-center justify-center p-6"
      >
        <img
          :src="image?.src"
          :alt="image?.caption"
          class="max-h-[80vh] rounded-xl object-contain"
        />
      </div>
      <div class="absolute bottom-8 inset-x-0 text-center text-white/80">
        {{ image?.caption }}
      </div>
      <button
        class="absolute right-6 top-6 rounded-full bg-white/10 p-2 ring-1 ring-white/20 hover:bg-white/20"
        @click="close"
      >
        ✕
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useLightbox } from "~/composables/useLightbox";
const { isOpen, image, close } = useLightbox();
</script>
