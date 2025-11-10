import { ref } from "vue";

export type LightboxImage = { src: string; caption?: string };

const isOpen = ref(false);
const image = ref<LightboxImage | null>(null);

export function useLightbox() {
  function open(img: LightboxImage) {
    image.value = img;
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
    image.value = null;
  }
  return { isOpen, image, open, close };
}
