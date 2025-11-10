<template>
  <div class="bg-black">
    <!-- Hero Section with Booking Card Inside -->
    <section
      class="relative overflow-hidden min-h-[100vh] flex items-center pt-20"
    >
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop&fm=webp"
          class="h-full w-full object-cover"
          loading="eager"
          alt="Luxury Hotel Pool and Interior"
          @error="handleImageError"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
        />
      </div>

      <div
        class="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <!-- Left Side - Hero Text (3 columns) -->
          <div
            class="flex flex-col items-start justify-center gap-4 lg:gap-5 order-2 lg:order-1 lg:col-span-3"
          >
            <!-- 5 Star Rating Card above heading -->
            <div class="flex justify-start">
              <div
                class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <div class="flex items-center gap-0.5">
                  <svg
                    class="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    class="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    class="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    class="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <svg
                    class="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-white font-semibold text-xs md:text-sm"
                  >Luxury 5-Star Hotel</span
                >
              </div>
            </div>
            <h1
              class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-white"
            >
              Experience Timeless Elegance at Hôtel Lumière
            </h1>
            <p
              class="max-w-lg text-white/85 text-sm md:text-base lg:text-lg leading-relaxed font-light"
            >
              Nestled in the heart of Paris, discover exquisite rooms,
              Michelin-starred dining, and a sanctuary of calm.
            </p>
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2"
            >
              <NuxtLink to="/booking">
                <button
                  class="group inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
                >
                  <span>Reserve Your Stay</span>
                  <svg
                    class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </NuxtLink>
              <NuxtLink
                to="#rooms"
                class="group text-sm md:text-base text-white/85 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-medium"
              >
                <span>Explore Rooms</span>
                <span
                  class="text-lg transition-transform group-hover:translate-x-1"
                  >→</span
                >
              </NuxtLink>
            </div>
          </div>

          <!-- Right Side - Booking Card (2 columns) -->
          <div class="order-1 lg:order-2 lg:col-span-2">
            <div
              class="w-full max-w-md mx-auto lg:ml-auto rounded-2xl bg-black/70 backdrop-blur-2xl p-5 md:p-6 shadow-2xl shadow-black/40 border border-white/20 relative overflow-hidden"
            >
              <!-- Decorative Elements -->
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-gold/8 rounded-full -mr-12 -mt-12 blur-2xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-20 h-20 bg-gold/5 rounded-full -ml-10 -mb-10 blur-xl"
              ></div>

              <div class="relative z-10">
                <div class="mb-5">
                  <h2
                    class="text-xl md:text-2xl font-display font-bold text-white mb-1"
                  >
                    Book Your Stay
                  </h2>
                  <p class="text-white/80 text-xs md:text-sm">
                    Special rates for direct bookings
                  </p>
                </div>

                <form class="space-y-4">
                  <!-- Check-in -->
                  <div>
                    <label
                      class="block text-xs font-semibold text-white mb-1.5"
                    >
                      Check-in Date
                    </label>
                    <div class="relative">
                      <input
                        type="date"
                        class="w-full rounded-lg bg-white/10 border-2 border-white/20 p-3 text-sm text-white font-medium outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 hover:border-white/30 placeholder-white/50"
                      />
                      <div
                        class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <svg
                          class="h-4 w-4 text-white/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Check-out -->
                  <div>
                    <label
                      class="block text-xs font-semibold text-white mb-1.5"
                    >
                      Check-out Date
                    </label>
                    <div class="relative">
                      <input
                        type="date"
                        class="w-full rounded-lg bg-white/10 border-2 border-white/20 p-3 text-sm text-white font-medium outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 hover:border-white/30 placeholder-white/50"
                      />
                      <div
                        class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <svg
                          class="h-4 w-4 text-white/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Guests -->
                  <div>
                    <label
                      class="block text-xs font-semibold text-white mb-1.5"
                    >
                      Guests
                    </label>
                    <div class="relative">
                      <select
                        class="w-full rounded-lg bg-white/10 border-2 border-white/20 p-3 text-sm text-white font-medium outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 hover:border-white/30 appearance-none cursor-pointer"
                      >
                        <option value="1" class="bg-black text-white">
                          1 Guest
                        </option>
                        <option value="2" selected class="bg-black text-white">
                          2 Guests
                        </option>
                        <option value="3" class="bg-black text-white">
                          3 Guests
                        </option>
                        <option value="4" class="bg-black text-white">
                          4 Guests
                        </option>
                        <option value="5+" class="bg-black text-white">
                          5+ Guests
                        </option>
                      </select>
                      <div
                        class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                      >
                        <svg
                          class="h-4 w-4 text-white/60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 9l-5 5m0 0l-5-5m5 5V3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <!-- Book Now Button -->
                  <NuxtLink to="/booking" class="block pt-1">
                    <button
                      type="button"
                      class="w-full group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gold to-gold/90 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:from-gold/90 hover:to-gold hover:scale-[1.02] shadow-md shadow-gold/25 hover:shadow-lg hover:shadow-gold/35"
                    >
                      <span>Check Availability</span>
                      <svg
                        class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </NuxtLink>

                  <!-- Trust Badge -->
                  <div
                    class="pt-1 flex items-center justify-center gap-1.5 text-xs text-white/80"
                  >
                    <svg
                      class="h-3.5 w-3.5 text-green-400"
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
                    <span class="text-white/60">•</span>
                    <span>Free Cancellation</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms Section -->
    <section
      id="rooms"
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24"
    >
      <div class="text-center py-10">
        <h2
          class="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
        >
          Featured Rooms
        </h2>
        <NuxtLink
          to="/rooms"
          class="inline-flex items-center gap-1 text-sm md:text-base text-white/70 hover:text-white transition-colors duration-200"
        >
          View all <span class="text-lg">→</span>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10"
      >
        <div
          v-for="room in rooms"
          :key="room.id"
          class="group overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:ring-2 bg-white/5 hover:bg-white/8 hover:shadow-2xl hover:shadow-black/50"
        >
          <div class="relative overflow-hidden">
            <img
              :src="room.image"
              :alt="room.title"
              class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              @error="handleImageError"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            />
            <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <h3
                class="font-display text-2xl md:text-3xl text-white font-semibold"
              >
                {{ room.title }}
              </h3>
            </div>
          </div>
          <div class="p-5 md:p-6 space-y-4">
            <div class="text-white/70">
              <ul class="flex flex-wrap gap-2 text-xs md:text-sm">
                <li
                  v-for="(feature, i) in room.features"
                  :key="i"
                  class="rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm"
                >
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-between pt-2">
              <div class="text-2xl md:text-3xl font-semibold text-white">
                €{{ room.price
                }}<span class="text-sm md:text-base text-white/60 font-normal"
                  >/night</span
                >
              </div>
              <NuxtLink
                :to="`/booking?room=${encodeURIComponent(room.title)}&price=${
                  room.price
                }&features=${room.features.join(
                  ','
                )}&amenities=${room.amenities.join(
                  ','
                )}&description=${encodeURIComponent(
                  room.description
                )}&image=${encodeURIComponent(room.image)}`"
              >
                <button
                  class="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
                >
                  Book Now
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dining Section -->
    <section
      id="dining"
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-black"
    >
      <div class="text-center py-10">
        <h2
          class="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
        >
          Dining & Restaurants
        </h2>
        <NuxtLink
          to="/dining"
          class="inline-flex items-center gap-1 text-sm md:text-base text-white/70 hover:text-white transition-colors duration-200"
        >
          See all <span class="text-lg">→</span>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10"
      >
        <div
          v-for="item in featuredDining"
          :key="item.id"
          class="group overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:ring-2 bg-white/5 hover:bg-white/8 hover:shadow-2xl hover:shadow-black/50"
        >
          <div class="relative overflow-hidden">
            <img
              :src="item.image"
              :alt="item.name"
              class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              @error="handleImageError"
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            />
            <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <h3
                class="font-display text-2xl md:text-3xl text-white font-semibold mb-1"
              >
                {{ item.name }}
              </h3>
              <p class="text-white/80 text-sm">{{ item.category }}</p>
            </div>
          </div>
          <div class="p-5 md:p-6 space-y-4">
            <p class="text-white/70 text-sm line-clamp-2">
              {{ item.description }}
            </p>
            <div class="flex items-center justify-between pt-2">
              <div class="text-2xl md:text-3xl font-semibold text-white">
                €{{ item.price }}
              </div>
              <NuxtLink :to="`/dining?item=${item.id}`">
                <button
                  class="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
                >
                  Order Now
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Reviews Section -->
    <section
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-black"
    >
      <div class="text-center mb-12">
        <h2
          class="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
        >
          Guest Reviews
        </h2>
        <p class="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          See what our guests have to say about their experience at Hôtel
          Lumière
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/8"
        >
          <div class="flex items-center gap-1 mb-4">
            <svg
              v-for="i in 5"
              :key="i"
              class="h-4 w-4 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p class="text-white/80 text-sm md:text-base leading-relaxed mb-4">
            "{{ review.comment }}"
          </p>
          <div class="flex items-center gap-3">
            <div
              class="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold"
            >
              {{ review.initials }}
            </div>
            <div>
              <p class="text-white font-medium text-sm">{{ review.name }}</p>
              <p class="text-white/60 text-xs">{{ review.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-black"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Side - Video -->
        <div class="order-2 lg:order-1">
          <div
            class="relative rounded-2xl overflow-hidden aspect-video bg-white/5 border border-white/10"
          >
            <video
              class="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source :src="videoSrc" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
            />
          </div>
        </div>

        <!-- Right Side - Text -->
        <div class="order-1 lg:order-2 space-y-6">
          <div>
            <h2
              class="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
            >
              About Us
            </h2>
            <div class="h-px w-16 bg-gold mb-6"></div>
          </div>
          <p class="text-white/80 text-base md:text-lg leading-relaxed">
            Hôtel Lumière stands as a beacon of luxury in the heart of Paris.
            Since 1920, we have been welcoming discerning travelers from around
            the world, offering an unparalleled experience that combines French
            elegance with modern sophistication.
          </p>
          <p class="text-white/80 text-base md:text-lg leading-relaxed">
            Our Michelin-starred restaurant, world-class spa, and meticulously
            designed rooms reflect our commitment to excellence. Every detail
            has been carefully curated to ensure your stay is nothing short of
            extraordinary.
          </p>
          <div class="pt-6">
            <NuxtLink to="/about">
              <button
                class="group inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/30"
              >
                Learn More
                <svg
                  class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us Section -->
    <section
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-black"
    >
      <div class="text-center mb-12">
        <h2
          class="font-display text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
        >
          Contact Us
        </h2>
        <p class="text-white/70 text-lg max-w-2xl mx-auto">
          Get in touch with us for reservations, inquiries, or special requests.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left Side - Contact Information -->
        <div class="space-y-6">
          <div>
            <h3
              class="font-display text-2xl md:text-3xl text-white font-semibold mb-4"
            >
              Get in Touch
            </h3>
            <p class="text-white/80 text-base leading-relaxed mb-6">
              We're here to assist you with any questions or special requests.
              Our team is available 24/7 to ensure your stay is exceptional.
            </p>
          </div>

          <!-- Phone -->
          <div
            class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 flex-shrink-0"
            >
              <svg
                class="h-7 w-7 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-2">Phone</h4>
              <p class="text-white/70 text-sm mb-1">
                <a
                  href="tel:+33123456789"
                  class="hover:text-gold transition-colors duration-200"
                  >+33 1 23 45 67 89</a
                >
              </p>
              <p class="text-white/70 text-sm">
                <a
                  href="tel:+33123456790"
                  class="hover:text-gold transition-colors duration-200"
                  >+33 1 23 45 67 90</a
                >
              </p>
              <p class="text-white/60 text-xs mt-1">24/7 Available</p>
            </div>
          </div>

          <!-- Email -->
          <div
            class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 flex-shrink-0"
            >
              <svg
                class="h-7 w-7 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-2">Email</h4>
              <p class="text-white/70 text-sm mb-1">
                <a
                  href="mailto:info@hotellumiere.com"
                  class="hover:text-gold transition-colors duration-200"
                  >info@hotellumiere.com</a
                >
              </p>
              <p class="text-white/70 text-sm">
                <a
                  href="mailto:reservations@hotellumiere.com"
                  class="hover:text-gold transition-colors duration-200"
                  >reservations@hotellumiere.com</a
                >
              </p>
            </div>
          </div>

          <!-- Address -->
          <div
            class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 flex-shrink-0"
            >
              <svg
                class="h-7 w-7 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-2">Address</h4>
              <p class="text-white/70 text-sm">12 Rue de Lumière</p>
              <p class="text-white/70 text-sm">75001 Paris, France</p>
            </div>
          </div>

          <!-- Business Hours -->
          <div
            class="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 flex-shrink-0"
            >
              <svg
                class="h-7 w-7 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-2">Business Hours</h4>
              <p class="text-white/70 text-sm">Monday - Sunday: 24/7</p>
              <p class="text-white/70 text-sm">Reception: Open 24 hours</p>
            </div>
          </div>

          <div class="pt-4">
            <NuxtLink to="/contact">
              <button
                class="w-full lg:w-auto inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/30"
              >
                Send Us a Message
              </button>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side - Virtual Map -->
        <div class="lg:sticky lg:top-24">
          <div
            class="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none bg-white/5 border border-white/10 shadow-2xl"
          >
            <!-- Google Maps Embed -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99162569376!2d2.3412!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              class="w-full h-full border-0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Hotel Location Map"
            ></iframe>
            <!-- Overlay for better integration -->
            <div
              class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent"
            />
          </div>
          <!-- Map Info -->
          <div class="mt-4 text-center">
            <p class="text-white/70 text-sm">
              Located in the heart of Paris, just minutes from the Louvre and
              Eiffel Tower
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Video source - using ref to prevent Vite from processing it as import
const videoSrc = ref("/images-videos/hotel_room_P360.mp4");

// Fallback image for error handling
const fallbackImage =
  "https://via.placeholder.com/1920x1080/0B0B0B/FFFFFF?text=Hôtel+Lumière";

// Handle image loading errors
function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  if (img && img.src !== fallbackImage) {
    img.src = fallbackImage;
  }
}

const rooms = [
  {
    id: "classic",
    title: "Classic Room",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop&fm=webp",
    features: ["22 m²", "City view", "Queen bed"],
    amenities: ["Wi-Fi", "Air conditioning", "Mini bar", "Safe", "TV"],
    description:
      "Elegant and comfortable room with city views, perfect for a relaxing stay in Paris.",
  },
  {
    id: "deluxe",
    title: "Deluxe Room",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop&fm=webp",
    features: ["28 m²", "Balcony", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Balcony",
      "Bath",
    ],
    description:
      "Spacious room with private balcony, offering stunning views and premium comfort.",
  },
  {
    id: "suite",
    title: "Executive Suite",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1400&auto=format&fit=crop&fm=webp",
    features: ["45 m²", "Lounge", "King bed"],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Mini bar",
      "Safe",
      "TV",
      "Lounge area",
      "Work desk",
      "Bath",
    ],
    description:
      "Luxurious suite with separate lounge area, ideal for business or extended stays.",
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    location: "London, UK",
    comment:
      "Absolutely stunning hotel! The service was impeccable and the rooms were beyond luxurious. Will definitely return.",
  },
  {
    id: 2,
    name: "James Anderson",
    initials: "JA",
    location: "New York, USA",
    comment:
      "Best hotel experience in Paris! The Michelin-starred dining was extraordinary and the staff made us feel like royalty.",
  },
  {
    id: 3,
    name: "Marie Dubois",
    initials: "MD",
    location: "Paris, France",
    comment:
      "Perfect location and exceptional service. The spa and pool facilities are world-class. Highly recommended!",
  },
  {
    id: 4,
    name: "David Chen",
    initials: "DC",
    location: "Tokyo, Japan",
    comment:
      "An unforgettable stay! Every detail was perfect, from the elegant rooms to the attentive concierge service.",
  },
];

const featuredDining = [
  {
    id: "truffle-risotto",
    name: "Truffle Risotto",
    category: "Main Course",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1400&auto=format&fit=crop&fm=webp",
    description: "Creamy Arborio rice with black truffle and Parmesan cheese.",
  },
  {
    id: "lobster-thermidor",
    name: "Lobster Thermidor",
    category: "Main Course",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop&fm=webp",
    description:
      "French classic with fresh lobster, creamy sauce, and Gruyère cheese.",
  },
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    category: "Dessert",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop&fm=webp",
    description:
      "Warm chocolate soufflé with vanilla ice cream and berry compote.",
  },
];
</script>

<style scoped>
/* Ensure date inputs display white text */
input[type="date"] {
  color-scheme: dark;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 0.7;
  cursor: pointer;
}

/* Ensure select dropdown options have dark background */
select option {
  background-color: #000;
  color: #fff;
}
</style>
