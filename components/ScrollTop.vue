<template>
  <button
    v-if="visible"
    @click="scrollTop"
    class="fixed bottom-6 right-6 rounded-full bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
  >
    ↑
  </button>
</template>

<script setup lang="ts">
const visible = ref(false);
function onScroll() {
  visible.value = window.scrollY > 300;
}
onMounted(() => window.addEventListener("scroll", onScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
