<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80 transition-all duration-300 shadow-lg shadow-black/30"
  >
    <BaseContainer>
      <div class="flex items-center justify-between py-3 md:py-4">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="font-display text-lg md:text-xl tracking-wide text-white font-semibold hover:text-gold transition-colors duration-200"
        >
          Hôtel Lumière
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
          <div
            class="relative"
            ref="roomsMenuRef"
            @mouseenter="roomsOpen = true"
            @mouseleave="roomsOpen = false"
          >
            <button
              class="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors duration-200"
              @click="roomsOpen = !roomsOpen"
              aria-haspopup="true"
              :aria-expanded="roomsOpen"
            >
              Rooms
              <svg
                class="h-3.5 w-3.5 transition-transform duration-200"
                :class="roomsOpen ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="roomsOpen"
                class="absolute right-0 mt-2 w-[min(90vw,280px)] rounded-xl bg-black/95 backdrop-blur-xl text-white shadow-2xl ring-1 ring-white/20 border border-white/10 py-2"
              >
                <div class="grid grid-cols-1 gap-0.5 p-2">
                  <NuxtLink
                    v-for="cat in roomCategories"
                    :key="cat.id"
                    :to="cat.to"
                    @click="roomsOpen = false"
                    class="group flex items-center rounded-lg px-4 py-2.5 hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="font-medium text-sm text-white/90 group-hover:text-gold transition-colors duration-200"
                    >
                      {{ cat.shortTitle || cat.title }}
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>
          <NuxtLink
            to="/gallery"
            class="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >Gallery</NuxtLink
          >
          <NuxtLink
            to="/dining"
            class="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >Dining</NuxtLink
          >
          <NuxtLink
            to="/facilities"
            class="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >Facilities</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >About</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >Contact</NuxtLink
          >
        </nav>

        <!-- Desktop Book Now Button -->
        <div class="hidden lg:flex items-center gap-4">
          <NuxtLink to="/booking">
            <BaseButton>Book Now</BaseButton>
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
        >
          <span
            class="absolute block h-0.5 w-6 bg-white transition-all duration-300"
            :class="
              mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            "
          ></span>
          <span
            class="absolute block h-0.5 w-6 bg-white transition-all duration-300"
            :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="absolute block h-0.5 w-6 bg-white transition-all duration-300"
            :class="
              mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            "
          ></span>
        </button>
      </div>
    </BaseContainer>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-30 lg:hidden"
        @click="closeMobileMenu"
      ></div>
    </transition>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-y-0 left-0 top-[60px] w-[min(85vw,320px)] bg-black/98 backdrop-blur-xl border-r border-white/20 shadow-2xl z-50 overflow-y-auto lg:hidden"
        @click.stop
      >
        <div class="flex flex-col h-full">
          <!-- Mobile Menu Header -->
          <div class="px-6 py-4 border-b border-white/10">
            <h2 class="text-lg font-semibold text-white">Menu</h2>
          </div>

          <!-- Mobile Menu Items -->
          <nav class="flex-1 px-4 py-6 space-y-2">
            <!-- Rooms Dropdown -->
            <div>
              <button
                @click="roomsMobileOpen = !roomsMobileOpen"
                class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
                :aria-expanded="roomsMobileOpen"
              >
                <span>Rooms</span>
                <svg
                  class="h-5 w-5 transition-transform duration-200"
                  :class="roomsMobileOpen ? 'rotate-180' : ''"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <transition
                enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-300"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="roomsMobileOpen"
                  class="mt-2 space-y-0.5 overflow-hidden"
                >
                  <NuxtLink
                    v-for="cat in roomCategories"
                    :key="cat.id"
                    :to="cat.to"
                    @click="closeMobileMenu"
                    class="flex items-center rounded-lg bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200"
                  >
                    <div class="font-medium">
                      {{ cat.shortTitle || cat.title }}
                    </div>
                  </NuxtLink>
                </div>
              </transition>
            </div>

            <!-- Other Menu Items -->
            <NuxtLink
              @click="closeMobileMenu"
              to="/gallery"
              class="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
            >
              Gallery
            </NuxtLink>
            <NuxtLink
              @click="closeMobileMenu"
              to="/dining"
              class="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
            >
              Dining
            </NuxtLink>
            <NuxtLink
              @click="closeMobileMenu"
              to="/facilities"
              class="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
            >
              Facilities
            </NuxtLink>
            <NuxtLink
              @click="closeMobileMenu"
              to="/about"
              class="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
            >
              About
            </NuxtLink>
            <NuxtLink
              @click="closeMobileMenu"
              to="/contact"
              class="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors duration-200"
            >
              Contact
            </NuxtLink>
          </nav>

          <!-- Mobile Menu Footer -->
          <div class="px-4 py-6 border-t border-white/10">
            <NuxtLink
              @click="closeMobileMenu"
              to="/booking"
              class="block w-full"
            >
              <BaseButton class="w-full justify-center"> Book Now </BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);
const roomsOpen = ref(false);
const roomsMobileOpen = ref(false);
const roomsMenuRef = ref<HTMLElement | null>(null);
let offWindowClick: (() => void) | null = null;
let offWindowKey: (() => void) | null = null;

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
  roomsMobileOpen.value = false;
  document.body.style.overflow = "";
}

onMounted(() => {
  const clickHandler = (e: MouseEvent) => {
    if (!roomsOpen.value) return;
    const el = roomsMenuRef.value;
    if (el && !el.contains(e.target as Node)) {
      roomsOpen.value = false;
    }
  };
  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (mobileMenuOpen.value) {
        closeMobileMenu();
      }
      if (roomsOpen.value) {
        roomsOpen.value = false;
      }
    }
  };
  window.addEventListener("click", clickHandler);
  window.addEventListener("keydown", keyHandler);
  offWindowClick = () => window.removeEventListener("click", clickHandler);
  offWindowKey = () => window.removeEventListener("keydown", keyHandler);
});

onBeforeUnmount(() => {
  if (offWindowClick) offWindowClick();
  if (offWindowKey) offWindowKey();
  document.body.style.overflow = "";
});

const roomCategories = ref([
  {
    id: "standard",
    title: "Standard Room / Superior Room",
    shortTitle: "Standard Room",
    to: { path: "/rooms", query: { type: "standard" } },
  },
  {
    id: "deluxe",
    title: "Deluxe Room",
    shortTitle: "Deluxe Room",
    to: { path: "/rooms", query: { type: "deluxe" } },
  },
  {
    id: "premium",
    title: "Premium Room / Executive Room",
    shortTitle: "Premium Room",
    to: { path: "/rooms", query: { type: "premium" } },
  },
  {
    id: "club",
    title: "Club Room / Executive Club Room",
    shortTitle: "Club Room",
    to: { path: "/rooms", query: { type: "club" } },
  },
  {
    id: "junior-suite",
    title: "Junior Suite / Mini Suite",
    shortTitle: "Junior Suite",
    to: { path: "/rooms", query: { type: "junior-suite" } },
  },
  {
    id: "suite",
    title: "Suite / Executive Suite",
    shortTitle: "Executive Suite",
    to: { path: "/rooms", query: { type: "suite" } },
  },
  {
    id: "presidential",
    title: "Presidential Suite / Royal Suite / Penthouse Suite",
    shortTitle: "Presidential Suite",
    to: { path: "/rooms", query: { type: "presidential" } },
  },
]);
</script>

<style scoped>
/* Smooth scrollbar for mobile menu */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
