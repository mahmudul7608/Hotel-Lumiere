<template>
  <section class="py-12" v-appear>
    <h2 class="font-display text-2xl">Sample Menu</h2>
    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-white/90">{{ item.name }}</h3>
          <span class="text-white/60">€{{ item.price }}</span>
        </div>
        <p class="mt-2 text-sm text-white/70">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    name: "Oysters & Champagne",
    price: 26,
    desc: "Gillardeau oysters, mignonette, brut champagne",
  },
  {
    name: "Truffle Risotto",
    price: 34,
    desc: "Arborio rice, parmesan, black truffle",
  },
  {
    name: "Coq au Vin",
    price: 32,
    desc: "Red wine braised chicken, lardons, mushrooms",
  },
  {
    name: "Crème Brûlée",
    price: 14,
    desc: "Madagascar vanilla custard, caramelized sugar",
  },
];
</script>
