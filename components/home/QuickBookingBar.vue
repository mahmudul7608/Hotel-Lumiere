<template>
  <div
    class="mx-auto -mt-10 w-full max-w-5xl rounded-2xl bg-white/5 p-4 backdrop-blur ring-1 ring-white/10 md:-mt-12"
  >
    <form class="grid items-end gap-3 md:grid-cols-5">
      <div class="md:col-span-2">
        <label class="mb-1 block text-xs text-white/70">Check-in</label>
        <input
          type="date"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
      <div class="md:col-span-2">
        <label class="mb-1 block text-xs text-white/70">Check-out</label>
        <input
          type="date"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
      <div>
        <label class="mb-1 block text-xs text-white/70">Guests</label>
        <input
          type="number"
          min="1"
          value="2"
          class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
        />
      </div>
      <div class="md:col-span-5">
        <div class="flex items-center justify-end pt-1">
          <NuxtLink to="/booking">
            <BaseButton>Book Now</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>
