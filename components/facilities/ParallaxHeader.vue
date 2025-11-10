<template>
  <section class="relative h-[50vh] overflow-hidden">
    <div class="absolute inset-0 bg-fixed" :style="bgStyle" />
    <div class="absolute inset-0 bg-black/50" />
    <BaseContainer>
      <div class="relative flex h-[50vh] items-end pb-10">
        <h1 class="font-display text-4xl">{{ title }}</h1>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ image: string; title: string }>();
const bgStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}));
</script>
