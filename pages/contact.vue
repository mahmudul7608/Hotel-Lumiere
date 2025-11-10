<template>
  <div>
    <section class="border-b border-white/10 bg-white/[0.02]">
      <BaseContainer>
        <div class="py-16">
          <h1 class="text-4xl font-semibold">Contact</h1>
          <p class="mt-3 max-w-2xl text-white/70">
            We’re here to help with reservations and enquiries.
          </p>
        </div>
      </BaseContainer>
    </section>
    <BaseContainer>
      <div class="grid gap-12 py-12 md:grid-cols-2">
        <form class="space-y-4" @submit.prevent="submit" v-appear>
          <div class="grid gap-4 sm:grid-cols-2">
            <input
              v-model="firstName"
              class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
              placeholder="First name"
            />
            <input
              v-model="lastName"
              class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
              placeholder="Last name"
            />
          </div>
          <input
            v-model="email"
            type="email"
            class="w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
            placeholder="Email"
          />
          <textarea
            v-model="message"
            class="min-h-[140px] w-full rounded-md bg-white/5 p-3 outline-none ring-1 ring-white/10 focus:ring-gold"
            placeholder="Message"
          ></textarea>
          <div class="flex items-center gap-4">
            <BaseButton>Send Message</BaseButton>
            <span
              v-if="status"
              class="text-sm"
              :class="status.ok ? 'text-gold' : 'text-red-400'"
              >{{ status.text }}</span
            >
          </div>
        </form>
        <div class="space-y-4" v-appear>
          <div>
            <h2 class="font-display text-2xl">Visit Us</h2>
            <p class="mt-2 text-white/70">12 Rue de Lumière, 75001 Paris</p>
          </div>
          <iframe
            class="h-64 w-full rounded-xl ring-1 ring-white/10"
            src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <div class="pt-2 text-sm text-white/70">
            <div>
              Phone:
              <a class="text-white hover:underline" href="tel:+33123456789"
                >+33 1 23 45 67 89</a
              >
            </div>
            <div>
              Email:
              <a
                class="text-white hover:underline"
                href="mailto:contact@hotellumiere.com"
                >contact@hotellumiere.com</a
              >
            </div>
          </div>
          <div class="flex items-center gap-4 pt-2 text-white/70">
            <a
              href="https://instagram.com"
              target="_blank"
              class="hover:text-white"
              >Instagram</a
            >
            <a
              href="https://facebook.com"
              target="_blank"
              class="hover:text-white"
              >Facebook</a
            >
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              class="hover:text-white"
              >Tripadvisor</a
            >
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");
const status = ref<{ ok: boolean; text: string } | null>(null);

async function submit() {
  status.value = null;
  if (!email.value || !message.value) {
    status.value = {
      ok: false,
      text: "Please enter a valid email and message.",
    };
    return;
  }
  const res = await $fetch("/api/contact", {
    method: "POST",
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    },
  });
  if ((res as any)?.ok) {
    status.value = {
      ok: true,
      text: "Message sent. We will get back to you shortly.",
    };
    firstName.value = lastName.value = email.value = message.value = "";
  } else {
    status.value = {
      ok: false,
      text: "Something went wrong. Please try again.",
    };
  }
}
</script>
