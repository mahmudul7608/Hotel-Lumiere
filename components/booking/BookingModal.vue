<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[100]">
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="close"
      />
      <div
        class="absolute inset-x-4 top-24 mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
      >
        <div
          class="flex items-center justify-between border-b border-white/10 px-6 py-4"
        >
          <h3 class="font-display text-xl">Book Your Stay</h3>
          <button class="text-white/60 hover:text-white" @click="close">
            ✕
          </button>
        </div>
        <div class="p-6">
          <BookingForm />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useBooking } from "~/composables/useBooking";
const { isOpen, close } = useBooking();
</script>
