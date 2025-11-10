<template>
  <div class="bg-black min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden border-b border-white/10 bg-white/[0.02]"
    >
      <div class="absolute inset-0">
        <img
          v-if="roomData?.image"
          :src="roomData.image"
          class="h-full w-full object-cover opacity-20"
          alt="Room"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"
        />
      </div>
      <BaseContainer>
        <div class="relative z-10 py-12 md:py-16">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-4"
          >
            Book Your Stay
          </h1>
          <p class="max-w-2xl text-white/80 text-lg">
            Complete your reservation and experience luxury at Hôtel Lumière
          </p>
        </div>
      </BaseContainer>
    </section>

    <BaseContainer>
      <div class="py-12 md:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Left Side - Room Details -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Selected Room Card -->
            <div
              v-if="roomData"
              class="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
            >
              <div class="relative h-64 md:h-80">
                <img
                  :src="roomData.image"
                  :alt="roomData.title"
                  class="h-full w-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                />
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h2
                    class="text-3xl md:text-4xl font-display font-semibold text-white mb-2"
                  >
                    {{ roomData.title }}
                  </h2>
                  <div class="text-3xl md:text-4xl font-bold text-gold">
                    €{{ roomData.price
                    }}<span class="text-lg text-white/70 font-normal"
                      >/night</span
                    >
                  </div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-white/80 mb-6 leading-relaxed">
                  {{ roomData.description }}
                </p>

                <!-- Features -->
                <div class="mb-6">
                  <h3 class="text-lg font-semibold text-white mb-3">
                    Room Features
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(feature, i) in roomData.features"
                      :key="i"
                      class="rounded-full bg-gold/20 text-gold px-4 py-2 text-sm font-medium"
                    >
                      {{ feature }}
                    </span>
                  </div>
                </div>

                <!-- Amenities -->
                <div>
                  <h3 class="text-lg font-semibold text-white mb-3">
                    Amenities
                  </h3>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div
                      v-for="(amenity, i) in roomData.amenities"
                      :key="i"
                      class="flex items-center gap-2 text-white/70"
                    >
                      <svg
                        class="h-5 w-5 text-gold flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span class="text-sm">{{ amenity }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Booking Form -->
            <div
              class="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8"
            >
              <h3 class="text-2xl font-display font-semibold text-white mb-6">
                Booking Details
              </h3>
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <!-- Check-in & Check-out -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-white mb-2">
                      Check-in Date
                    </label>
                    <input
                      v-model="bookingData.checkIn"
                      type="date"
                      required
                      class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-white mb-2">
                      Check-out Date
                    </label>
                    <input
                      v-model="bookingData.checkOut"
                      type="date"
                      required
                      class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  </div>
                </div>

                <!-- Guests -->
                <div>
                  <label class="block text-sm font-semibold text-white mb-2">
                    Number of Guests
                  </label>
                  <select
                    v-model="bookingData.guests"
                    required
                    class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all appearance-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>

                <!-- Guest Information -->
                <div class="pt-4 border-t border-white/10">
                  <h4 class="text-lg font-semibold text-white mb-4">
                    Guest Information
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        class="block text-sm font-semibold text-white mb-2"
                      >
                        First Name
                      </label>
                      <input
                        v-model="bookingData.firstName"
                        type="text"
                        required
                        class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-semibold text-white mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        v-model="bookingData.lastName"
                        type="text"
                        required
                        class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm font-semibold text-white mb-2">
                      Email
                    </label>
                    <input
                      v-model="bookingData.email"
                      type="email"
                      required
                      class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm font-semibold text-white mb-2">
                      Phone
                    </label>
                    <input
                      v-model="bookingData.phone"
                      type="tel"
                      required
                      class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>

                <!-- Special Requests -->
                <div>
                  <label class="block text-sm font-semibold text-white mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    v-model="bookingData.specialRequests"
                    rows="4"
                    class="w-full rounded-lg bg-white/10 border border-white/20 p-4 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    placeholder="Any special requests or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  class="w-full rounded-lg bg-gradient-to-r from-gold to-gold/90 px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:from-gold/90 hover:to-gold hover:scale-[1.02] shadow-lg shadow-gold/30"
                >
                  Complete Booking
                </button>
              </form>
            </div>
          </div>

          <!-- Right Side - Booking Summary -->
          <div class="lg:col-span-1">
            <div class="lg:sticky lg:top-24">
              <div
                class="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6"
              >
                <h3 class="text-xl font-display font-semibold text-white mb-6">
                  Booking Summary
                </h3>

                <div v-if="roomData" class="space-y-4">
                  <div class="flex justify-between text-white/70">
                    <span>Room</span>
                    <span class="text-white font-medium">{{
                      roomData.title
                    }}</span>
                  </div>
                  <div class="flex justify-between text-white/70">
                    <span>Price per night</span>
                    <span class="text-white font-medium"
                      >€{{ roomData.price }}</span
                    >
                  </div>
                  <div
                    v-if="nights > 0"
                    class="flex justify-between text-white/70"
                  >
                    <span>Nights</span>
                    <span class="text-white font-medium">{{ nights }}</span>
                  </div>
                  <div class="border-t border-white/10 pt-4">
                    <div class="flex justify-between text-white">
                      <span class="text-lg font-semibold">Total</span>
                      <span class="text-2xl font-bold text-gold">
                        €{{ totalPrice }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Trust Badges -->
                <div class="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <svg
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Best Price Guarantee</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <svg
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Free Cancellation</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-white/70">
                    <svg
                      class="h-5 w-5 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const roomData = computed(() => {
  const room = route.query.room as string;
  const price = route.query.price as string;
  const features = (route.query.features as string)?.split(",") || [];
  const amenities = (route.query.amenities as string)?.split(",") || [];
  const description =
    (route.query.description as string) ||
    "Luxurious room with premium amenities.";
  const image =
    (route.query.image as string) ||
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop";

  if (!room || !price) return null;

  return {
    title: room,
    price: parseInt(price),
    features,
    amenities,
    description,
    image,
  };
});

const bookingData = reactive({
  checkIn: "",
  checkOut: "",
  guests: "2",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialRequests: "",
});

const nights = computed(() => {
  if (!bookingData.checkIn || !bookingData.checkOut) return 0;
  const checkIn = new Date(bookingData.checkIn);
  const checkOut = new Date(bookingData.checkOut);
  const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
});

const totalPrice = computed(() => {
  if (!roomData.value || nights.value === 0) return roomData.value?.price || 0;
  return roomData.value.price * nights.value;
});

function handleSubmit() {
  // Here you would normally send the booking data to your backend
  alert(
    "Booking submitted successfully! Thank you for choosing Hôtel Lumière."
  );
  // navigateTo('/booking-confirmation');
}

// Set minimum date to today
onMounted(() => {
  const today = new Date().toISOString().split("T")[0];
  bookingData.checkIn = today;
});
</script>
