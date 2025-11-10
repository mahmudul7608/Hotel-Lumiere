<template>
  <div class="min-h-screen flex flex-col bg-black">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
    <BookingModal />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
// No layout logic yet
</script>
