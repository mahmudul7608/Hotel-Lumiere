<template>
  <footer
    class="border-t border-white/10 bg-gradient-to-b from-black via-black to-black/95 relative overflow-hidden"
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
      <div class="relative z-10">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 py-12 md:py-16"
        >
          <!-- Hotel Info -->
          <div class="relative">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-px w-8 bg-gold"></div>
              <h3
                class="font-display text-xl md:text-2xl font-semibold text-white"
              >
                Hôtel Lumière
              </h3>
            </div>
            <p class="text-white/70 text-sm leading-relaxed mb-5">
              5 Star Luxury Hotel in the heart of Paris. Experience timeless
              elegance and world-class service.
            </p>
            <div class="flex items-center gap-4">
              <a
                href="#"
                class="group relative w-10 h-10 rounded-full bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  class="h-5 w-5 text-white/70 group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="group relative w-10 h-10 rounded-full bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  class="h-5 w-5 text-white/70 group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="group relative w-10 h-10 rounded-full bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  class="h-5 w-5 text-white/70 group-hover:text-gold transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="relative">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-px w-8 bg-gold"></div>
              <h3
                class="font-display text-xl md:text-2xl font-semibold text-white"
              >
                Quick Links
              </h3>
            </div>
            <ul class="space-y-2.5">
              <li>
                <NuxtLink
                  to="/"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>Home</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/rooms"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>Rooms & Suites</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/dining"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>Dining</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/facilities"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>Facilities</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/gallery"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>Gallery</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="group flex items-center gap-2 text-white/70 hover:text-gold text-sm transition-colors duration-300"
                >
                  <div
                    class="h-px w-0 group-hover:w-4 bg-gold transition-all duration-300"
                  ></div>
                  <span>About Us</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="relative">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-px w-8 bg-gold"></div>
              <h3
                class="font-display text-xl md:text-2xl font-semibold text-white"
              >
                Contact
              </h3>
            </div>
            <ul class="space-y-3.5 text-sm text-white/70">
              <li class="flex items-start gap-3 group">
                <div
                  class="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300"
                >
                  <svg
                    class="h-5 w-5 text-gold"
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
                <span class="pt-2"
                  >12 Rue de Lumière<br />75001 Paris, France</span
                >
              </li>
              <li class="flex items-center gap-3 group">
                <div
                  class="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300"
                >
                  <svg
                    class="h-5 w-5 text-gold"
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
                <span>+33 1 23 45 67 89</span>
              </li>
              <li class="flex items-center gap-3 group">
                <div
                  class="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300"
                >
                  <svg
                    class="h-5 w-5 text-gold"
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
                <span>info@hotellumiere.com</span>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="relative">
            <div class="flex items-center gap-2 mb-4">
              <div class="h-px w-8 bg-gold"></div>
              <h3
                class="font-display text-xl md:text-2xl font-semibold text-white"
              >
                Newsletter
              </h3>
            </div>
            <p class="text-white/70 text-sm mb-5 leading-relaxed">
              Subscribe to receive special offers and updates.
            </p>
            <form class="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                class="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all hover:border-white/30"
              />
              <button
                type="submit"
                class="w-full rounded-lg bg-gradient-to-r from-gold to-gold/90 px-4 py-3 text-sm font-semibold text-black hover:from-gold/90 hover:to-gold transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 mt-8 pb-8 md:pb-12 relative">
        <div
          class="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm text-white/60"
        >
          <p class="text-white/70">
            © {{ new Date().getFullYear() }} Hôtel Lumière. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink
              to="/privacy"
              class="hover:text-gold transition-colors duration-300"
              >Privacy Policy</NuxtLink
            >
            <span class="text-white/30">•</span>
            <NuxtLink
              to="/terms"
              class="hover:text-gold transition-colors duration-300"
              >Terms of Service</NuxtLink
            >
          </div>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>
