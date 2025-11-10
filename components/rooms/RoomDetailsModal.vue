<template>
  <teleport to="body">
    <div v-if="room" class="fixed inset-0 z-[100]">
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="close"
      />
      <div
        class="absolute inset-x-4 top-20 mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
      >
        <div class="grid gap-0 md:grid-cols-2">
          <img
            :src="room.image"
            :alt="room.title"
            class="h-full w-full object-cover"
          />
          <div class="p-6">
            <div class="flex items-start justify-between">
              <h3 class="font-display text-2xl">{{ room.title }}</h3>
              <button class="text-white/60 hover:text-white" @click="close">
                ✕
              </button>
            </div>
            <div class="mt-2 text-white/70">€{{ room.price }} / night</div>
            <div class="mt-4 grid gap-2 text-sm">
              <div v-if="room.size">Size: {{ room.size }}</div>
              <div v-if="room.view">View: {{ room.view }}</div>
            </div>
            <div class="mt-4">
              <h4 class="font-display text-lg">Amenities</h4>
              <ul class="mt-2 flex flex-wrap gap-2 text-xs">
                <li
                  v-for="(a, i) in room.amenities || []"
                  :key="i"
                  class="rounded-full bg-white/5 px-2 py-1"
                >
                  {{ a }}
                </li>
              </ul>
            </div>
            <div class="mt-6 flex justify-end">
              <NuxtLink to="/booking">
                <BaseButton>Reserve This Room</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoomDetails } from "~/composables/useRoomDetails";
const { selected, close } = useRoomDetails();
const room = computed(() => selected.value);
</script>
