<template>
  <div class="columns-1 gap-4 sm:columns-2 lg:columns-3" v-appear>
    <div
      v-for="(img, i) in images"
      :key="i"
      class="mb-4 break-inside-avoid overflow-hidden rounded-xl ring-1 ring-white/10"
    >
      <img
        :src="typeof img === 'string' ? img : img.src"
        class="w-full object-cover transition duration-500 hover:scale-[1.03]"
        loading="lazy"
        @click="onClick(img)"
      />
      <div
        v-if="typeof img !== 'string' && img.caption"
        class="p-2 text-center text-xs text-white/60"
      >
        {{ img.caption }}
      </div>
    </div>
    <Lightbox />
  </div>
</template>

<script setup lang="ts">
import Lightbox from "~/components/gallery/Lightbox.vue";
import { useLightbox } from "~/composables/useLightbox";

type Img = string | { src: string; caption?: string };
const props = defineProps<{ images: Img[] }>();
const { open } = useLightbox();

function onClick(img: Img) {
  open(typeof img === "string" ? { src: img } : img);
}
</script>
