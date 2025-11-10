<template>
  <form
    class="grid gap-4 rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10"
    @submit.prevent="submit"
  >
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label class="mb-1 block text-sm text-white/70">Check-in</label>
        <input
          v-model="checkin"
          type="date"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
      <div>
        <label class="mb-1 block text-sm text-white/70">Check-out</label>
        <input
          v-model="checkout"
          type="date"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
    </div>
    <div class="grid gap-4 sm:grid-cols-3">
      <div>
        <label class="mb-1 block text-sm text-white/70">Guests</label>
        <input
          v-model.number="guests"
          type="number"
          min="1"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
      <div class="sm:col-span-2">
        <label class="mb-1 block text-sm text-white/70">Room Type</label>
        <select
          v-model="roomType"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        >
          <option>Classic Room</option>
          <option>Deluxe Room</option>
          <option>Executive Suite</option>
        </select>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 pt-2">
      <span v-if="error" class="text-sm text-red-400">{{ error }}</span>
      <span v-if="success" class="text-sm text-gold"
        >Available! We will hold your selection.</span
      >
      <BaseButton>Check Availability</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const checkin = ref("");
const checkout = ref("");
const guests = ref<number>(2);
const roomType = ref("Deluxe Room");
const error = ref("");
const success = ref(false);

function submit() {
  error.value = "";
  success.value = false;
  if (!checkin.value || !checkout.value) {
    error.value = "Please select dates.";
    return;
  }
  if (new Date(checkin.value) >= new Date(checkout.value)) {
    error.value = "Check-out must be after check-in.";
    return;
  }
  if (guests.value < 1) {
    error.value = "Guests must be at least 1.";
    return;
  }
  success.value = true;
}
</script>
