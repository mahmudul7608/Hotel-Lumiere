<template>
  <div class="bg-black">
    <!-- Hero Section with Booking Card Inside -->
    <section
      class="relative overflow-hidden min-h-[100vh] flex items-center pt-20 border-b border-white/10"
    >
      <div class="absolute inset-0">
        <video
          ref="heroVideo"
          class="h-full w-full object-cover object-center"
          loop
          muted
          playsinline
          autoplay
          preload="metadata"
          @play="isVideoPlaying = true"
          @pause="isVideoPlaying = false"
        >
          <source src="/images-videos/about.mp4" type="video/mp4" />
          <img
            src="/images-videos/hero.jpg"
            class="h-full w-full object-cover object-center"
            alt="Luxury Hotel Pool and Interior"
            loading="eager"
            @error="handleImageError"
          />
        </video>
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"
        />
        <!-- Play/Pause Button -->
        <button
          @click="toggleVideo"
          class="absolute bottom-8 right-8 z-20 group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/40 backdrop-blur-md border-2 border-white/30 hover:border-gold transition-all duration-300 hover:bg-black/60 hover:scale-110 shadow-xl hover:shadow-gold/40 active:scale-95"
          aria-label="Play/Pause Video"
        >
          <div class="relative">
            <svg
              v-if="!isVideoPlaying"
              class="w-7 h-7 md:w-9 md:h-9 text-white group-hover:text-gold transition-colors duration-300 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <svg
              v-else
              class="w-7 h-7 md:w-9 md:h-9 text-white group-hover:text-gold transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </div>
        </button>
      </div>

      <BaseContainer>
        <div class="relative z-10 py-8 md:py-12">
          <div
            class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start"
          >
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
                          <option
                            value="2"
                            selected
                            class="bg-black text-white"
                          >
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
      </BaseContainer>
    </section>

    <!-- Rooms Section -->
    <section
      id="rooms"
      :class="[
        'border-b bg-white/[0.02] transition-all duration-300',
        activeSection === 'rooms'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <BaseContainer>
        <div class="py-12">
          <div class="mb-8 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl font-semibold md:text-4xl lg:text-5xl font-display text-white mb-3 tracking-tight"
              >
                Featured Rooms
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-4 font-light leading-relaxed"
            >
              Experience luxury and comfort in our elegantly designed rooms
            </p>
            <NuxtLink
              to="/rooms"
              class="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors duration-200 border-b border-transparent hover:border-gold"
            >
              View all <span>→</span>
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="room in rooms"
              :key="room.id"
              class="group overflow-hidden rounded-xl ring-1 ring-white/10 transition-all duration-300 hover:ring-gold/50 hover:ring-2 bg-white/5 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-gold/10"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="room.image"
                  :alt="room.title"
                  class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  @error="handleImageError"
                />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div class="absolute inset-x-0 bottom-0 p-4">
                  <h3
                    class="font-display text-xl text-white font-semibold mb-1"
                  >
                    {{ room.title }}
                  </h3>
                  <div class="flex items-center gap-2 text-xs text-white/80">
                    <span
                      v-for="(feature, i) in room.features.slice(0, 2)"
                      :key="i"
                      class="flex items-center gap-1"
                    >
                      {{ feature }}
                      <span v-if="i < room.features.slice(0, 2).length - 1"
                        >•</span
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 space-y-3">
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="(feature, i) in room.features"
                    :key="i"
                    class="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-sm"
                  >
                    {{ feature }}
                  </span>
                </div>
                <div
                  class="flex items-center justify-between pt-2 border-t border-white/10"
                >
                  <div class="text-xl font-semibold text-white">
                    €{{ room.price
                    }}<span class="text-xs text-white/60 font-normal ml-1"
                      >/night</span
                    >
                  </div>
                  <NuxtLink
                    :to="`/booking?room=${encodeURIComponent(
                      room.title
                    )}&price=${room.price}&features=${room.features.join(
                      ','
                    )}&amenities=${room.amenities.join(
                      ','
                    )}&description=${encodeURIComponent(
                      room.description
                    )}&image=${encodeURIComponent(room.image)}`"
                  >
                    <BaseButton class="text-xs px-4 py-2">
                      Book Now
                    </BaseButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Gallery Section -->
    <section
      id="gallery"
      :class="[
        'border-b bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden transition-all duration-300',
        activeSection === 'gallery'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></div>
      </div>

      <BaseContainer>
        <div class="py-12 md:py-16 relative z-10">
          <!-- Header Section -->
          <div class="mb-10 md:mb-12 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 tracking-tight"
              >
                Gallery
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
            >
              Discover the elegance and beauty of our hotel through our curated
              collection
            </p>
          </div>

          <!-- Gallery Grid -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] overflow-hidden"
          >
            <!-- Left Column: Two Images Stacked -->
            <div
              class="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col gap-4 md:gap-5"
            >
              <!-- Top-left: Room Image -->
              <div
                class="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 cursor-pointer aspect-square bg-white/5 backdrop-blur-sm hover:bg-white/10 flex-1"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1400&auto=format&fit=crop"
                  alt="Modern Bedroom"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 ring-1 ring-white/5 group-hover:ring-gold/30 transition-all duration-500 rounded-2xl"
                ></div>
              </div>

              <!-- Bottom-left: Room Image -->
              <div
                class="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 cursor-pointer aspect-square bg-white/5 backdrop-blur-sm hover:bg-white/10 flex-1"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop"
                  alt="Stylish Bedroom"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 ring-1 ring-white/5 group-hover:ring-gold/30 transition-all duration-500 rounded-2xl"
                ></div>
              </div>
            </div>

            <!-- Top-middle: Hotel Room Video (spans 2 columns) -->
            <div
              class="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border-2 border-white/15 hover:border-gold/70 transition-all duration-700 cursor-pointer aspect-[4/3] bg-black/30 backdrop-blur-sm ring-2 ring-white/10 hover:ring-gold/50 shadow-2xl hover:shadow-gold/40"
            >
              <video
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              >
                <source
                  src="/images-videos/hotel_room_P360.mp4"
                  type="video/mp4"
                />
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
                  alt="Hotel Room Video"
                  class="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </video>
              <!-- Premium Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              ></div>
              <!-- Decorative Corner Accents -->
              <div
                class="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/80 transition-all duration-700 pointer-events-none rounded-tl-2xl"
              ></div>
              <div
                class="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/80 transition-all duration-700 pointer-events-none rounded-br-2xl"
              ></div>
              <!-- Play Icon Overlay -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              >
                <div
                  class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Right Column: Two Images Stacked -->
            <div
              class="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col gap-4 md:gap-5"
            >
              <!-- Top-right: Room Image -->
              <div
                class="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 cursor-pointer aspect-square bg-white/5 backdrop-blur-sm hover:bg-white/10 flex-1"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1400&auto=format&fit=crop"
                  alt="Cozy Bedroom"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 ring-1 ring-white/5 group-hover:ring-gold/30 transition-all duration-500 rounded-2xl"
                ></div>
              </div>

              <!-- Bottom-right: Food Image -->
              <div
                class="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 cursor-pointer aspect-square bg-white/5 backdrop-blur-sm hover:bg-white/10 flex-1"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop"
                  alt="Fine Dining"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 ring-1 ring-white/5 group-hover:ring-gold/30 transition-all duration-500 rounded-2xl"
                ></div>
              </div>
            </div>
          </div>

          <!-- Load More Button -->
          <div class="mt-10 md:mt-12 text-center">
            <NuxtLink to="/gallery">
              <button
                class="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold/90 px-8 py-4 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:from-gold/90 hover:to-gold hover:scale-105 shadow-xl shadow-gold/40 hover:shadow-2xl hover:shadow-gold/50 border-2 border-transparent hover:border-white/20"
              >
                <span>Explore Gallery</span>
                <svg
                  class="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </NuxtLink>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Dining Section -->
    <section
      id="dining"
      :class="[
        'border-b bg-black transition-all duration-300',
        activeSection === 'dining'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <BaseContainer>
        <div class="py-12">
          <div class="mb-8 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl font-semibold md:text-4xl lg:text-5xl font-display text-white mb-3 tracking-tight"
              >
                Dining & Restaurants
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-4 font-light leading-relaxed"
            >
              Savor Michelin-starred cuisine and exquisite culinary experiences
            </p>
            <NuxtLink
              to="/dining"
              class="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors duration-200 border-b border-transparent hover:border-gold"
            >
              See all <span>→</span>
            </NuxtLink>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="item in featuredDining"
              :key="item.id"
              class="group overflow-hidden rounded-xl ring-1 ring-white/10 transition-all duration-300 hover:ring-gold/50 hover:ring-2 bg-white/5 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-gold/10"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  @error="handleImageError"
                />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <div class="absolute inset-x-0 bottom-0 p-4">
                  <div class="mb-1">
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold backdrop-blur-sm"
                    >
                      {{ item.category }}
                    </span>
                  </div>
                  <h3
                    class="font-display text-xl text-white font-semibold mt-2"
                  >
                    {{ item.name }}
                  </h3>
                </div>
              </div>
              <div class="p-4 space-y-3">
                <p class="text-white/70 text-sm line-clamp-2 leading-relaxed">
                  {{ item.description }}
                </p>
                <div
                  class="flex items-center justify-between pt-2 border-t border-white/10"
                >
                  <div class="text-xl font-semibold text-white">
                    €{{ item.price }}
                  </div>
                  <NuxtLink :to="`/dining?item=${item.id}`">
                    <BaseButton class="text-xs px-4 py-2">
                      Order Now
                    </BaseButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Guest Reviews Section -->
    <section
      id="reviews"
      :class="[
        'border-b bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden transition-all duration-300',
        activeSection === 'reviews'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"
        ></div>
      </div>

      <BaseContainer>
        <div class="py-12 md:py-16 relative z-10">
          <div class="mb-10 md:mb-12 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl font-semibold md:text-4xl lg:text-5xl font-display text-white mb-3 tracking-tight"
              >
                Guest Reviews
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
            >
              See what our guests have to say about their experience at Hôtel
              Lumière
            </p>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          >
            <div
              v-for="review in reviews"
              :key="review.id"
              class="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-gold/50 hover:ring-2 hover:ring-gold/30 transition-all duration-500 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-gold/20 overflow-hidden"
            >
              <!-- Decorative Corner Elements -->
              <div
                class="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 pointer-events-none rounded-tr-2xl"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 pointer-events-none rounded-bl-2xl"
              ></div>

              <!-- Guest Image -->
              <div class="mb-4 flex items-center gap-3">
                <div class="relative">
                  <img
                    :src="review.image"
                    :alt="review.name"
                    class="h-12 w-12 rounded-full object-cover border-2 border-white/20 group-hover:border-gold/50 transition-all duration-300"
                    loading="lazy"
                  />
                  <div
                    class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"
                  ></div>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-white font-semibold text-sm truncate">
                    {{ review.name }}
                  </p>
                  <p class="text-white/60 text-xs truncate">
                    {{ review.location }}
                  </p>
                </div>
              </div>

              <!-- Star Rating -->
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

              <!-- Review Comment -->
              <p
                class="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4 relative z-10"
              >
                "{{ review.comment }}"
              </p>

              <!-- Verified Badge -->
              <div
                class="flex items-center gap-2 pt-3 border-t border-white/10"
              >
                <svg
                  class="h-4 w-4 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-xs text-white/60">Verified Guest</span>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- About Us Section -->
    <section
      id="about"
      :class="[
        'border-b bg-black transition-all duration-300',
        activeSection === 'about'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <BaseContainer>
        <div class="py-12">
          <div class="mb-8 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl font-semibold md:text-4xl lg:text-5xl font-display text-white mb-3 tracking-tight"
              >
                About Us
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
            >
              A legacy of luxury and elegance since 1920
            </p>
          </div>

          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <!-- Left Side - Image -->
            <div class="order-2 lg:order-1">
              <div
                class="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 ring-1 ring-white/10 group hover:ring-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop"
                  alt="Luxury Hotel Interior"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"
                />
              </div>
            </div>

            <!-- Right Side - Text -->
            <div class="order-1 lg:order-2 space-y-6">
              <div>
                <h3 class="text-2xl font-semibold text-white mb-4">
                  Experience Timeless Elegance
                </h3>
                <p class="text-white/70 text-sm leading-relaxed mb-4">
                  Hôtel Lumière stands as a beacon of luxury in the heart of
                  Paris. Since 1920, we have been welcoming discerning travelers
                  from around the world, offering an unparalleled experience
                  that combines French elegance with modern sophistication.
                </p>
                <p class="text-white/70 text-sm leading-relaxed">
                  Our Michelin-starred restaurant, world-class spa, and
                  meticulously designed rooms reflect our commitment to
                  excellence. Every detail has been carefully curated to ensure
                  your stay is nothing short of extraordinary.
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-gold"
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
                  </div>
                  <div>
                    <h4 class="text-white font-semibold text-sm mb-1">
                      Michelin-Starred
                    </h4>
                    <p class="text-white/60 text-xs">
                      Exquisite dining experience
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-gold"
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
                  </div>
                  <div>
                    <h4 class="text-white font-semibold text-sm mb-1">
                      World-Class Spa
                    </h4>
                    <p class="text-white/60 text-xs">Ultimate relaxation</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-gold"
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
                  </div>
                  <div>
                    <h4 class="text-white font-semibold text-sm mb-1">
                      Luxury Rooms
                    </h4>
                    <p class="text-white/60 text-xs">
                      Elegantly designed spaces
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div
                    class="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-5 h-5 text-gold"
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
                  </div>
                  <div>
                    <h4 class="text-white font-semibold text-sm mb-1">
                      Prime Location
                    </h4>
                    <p class="text-white/60 text-xs">Heart of Paris</p>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <NuxtLink to="/about">
                  <button
                    class="group inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/30"
                  >
                    Learn More
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
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <!-- Contact Us Section -->
    <section
      id="contact"
      :class="[
        'border-b bg-white/[0.02] transition-all duration-300',
        activeSection === 'contact'
          ? 'border-gold border-b-2'
          : 'border-white/10',
      ]"
    >
      <BaseContainer>
        <div class="py-12">
          <div class="mb-8 text-center">
            <div class="inline-block mb-4">
              <div class="h-px w-16 bg-gold mx-auto mb-3"></div>
              <h2
                class="text-3xl font-semibold md:text-4xl lg:text-5xl font-display text-white mb-3 tracking-tight"
              >
                Contact Us
              </h2>
              <div class="h-px w-16 bg-gold mx-auto mt-3"></div>
            </div>
            <p
              class="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed"
            >
              Get in touch with us for reservations, inquiries, or special
              requests.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2 md:gap-12">
            <!-- Left Side - Contact Information -->
            <div class="space-y-4">
              <div>
                <h3 class="font-display text-xl text-white font-semibold mb-3">
                  Visit Us
                </h3>
                <p class="text-white/70 text-sm mb-4">
                  12 Rue de Lumière, 75001 Paris
                </p>
              </div>

              <div class="space-y-3 text-sm text-white/70">
                <div>
                  Phone:
                  <a
                    class="text-white hover:text-gold transition-colors"
                    href="tel:+33123456789"
                    >+33 1 23 45 67 89</a
                  >
                </div>
                <div>
                  Email:
                  <a
                    class="text-white hover:text-gold transition-colors"
                    href="mailto:contact@hotellumiere.com"
                    >contact@hotellumiere.com</a
                  >
                </div>
              </div>

              <div class="flex items-center gap-4 pt-2 text-sm text-white/70">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  class="hover:text-white transition-colors"
                  >Instagram</a
                >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  class="hover:text-white transition-colors"
                  >Facebook</a
                >
                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  class="hover:text-white transition-colors"
                  >Tripadvisor</a
                >
              </div>

              <div class="pt-4">
                <NuxtLink to="/contact">
                  <BaseButton>Send Us a Message</BaseButton>
                </NuxtLink>
              </div>
            </div>

            <!-- Right Side - Map -->
            <div class="space-y-4">
              <iframe
                class="h-64 w-full rounded-xl ring-1 ring-white/10"
                src="https://maps.google.com/maps?q=paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p class="text-sm text-white/70 text-center">
                Located in the heart of Paris, just minutes from the Louvre and
                Eiffel Tower
              </p>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// Hero video ref
const heroVideo = ref<HTMLVideoElement | null>(null);
const isVideoPlaying = ref(true);
const activeSection = ref<string>("");

// Scroll detection for active section border
function updateActiveSection() {
  const sections = [
    "rooms",
    "gallery",
    "dining",
    "reviews",
    "about",
    "contact",
  ];
  const scrollPosition = window.scrollY + 200; // Offset for header height

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        activeSection.value = sections[i];
        return;
      }
    }
  }
  activeSection.value = "";
}

let scrollHandler: (() => void) | null = null;

onMounted(() => {
  scrollHandler = () => {
    updateActiveSection();
  };
  window.addEventListener("scroll", scrollHandler);
  updateActiveSection(); // Initial check
});

onBeforeUnmount(() => {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
  }
});

// Toggle video play/pause
function toggleVideo() {
  if (heroVideo.value) {
    if (isVideoPlaying.value) {
      heroVideo.value.pause();
      isVideoPlaying.value = false;
    } else {
      heroVideo.value.play();
      isVideoPlaying.value = true;
    }
  }
}

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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    comment:
      "Absolutely stunning hotel! The service was impeccable and the rooms were beyond luxurious. Will definitely return.",
  },
  {
    id: 2,
    name: "James Anderson",
    initials: "JA",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    comment:
      "Best hotel experience in Paris! The Michelin-starred dining was extraordinary and the staff made us feel like royalty.",
  },
  {
    id: 3,
    name: "Marie Dubois",
    initials: "MD",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    comment:
      "Perfect location and exceptional service. The spa and pool facilities are world-class. Highly recommended!",
  },
  {
    id: 4,
    name: "David Chen",
    initials: "DC",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
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
