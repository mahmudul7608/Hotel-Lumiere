<template>
  <div class="bg-black min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden border-b border-white/10 bg-white/[0.02]"
    >
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"
          class="h-full w-full object-cover opacity-20"
          alt="Restaurant"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"
        />
      </div>
      <BaseContainer>
        <div class="relative z-10 py-16 md:py-20">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-4"
          >
            Dining & Restaurants
          </h1>
          <p class="max-w-2xl text-white/80 text-lg">
            Experience Michelin-starred cuisine and exquisite dining at Hôtel
            Lumière.
          </p>
        </div>
      </BaseContainer>
    </section>

    <BaseContainer>
      <div class="py-12 md:py-16">
        <!-- Category Filter -->
        <div class="mb-8 flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300',
              selectedCategory === category
                ? 'bg-gold text-black shadow-lg shadow-gold/30'
                : 'bg-white/10 text-white hover:bg-white/20',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Menu Items Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/8 hover:shadow-2xl hover:shadow-black/50"
          >
            <div class="relative overflow-hidden">
              <img
                :src="item.image"
                :alt="item.name"
                class="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />
            </div>
            <div class="p-5 space-y-3">
              <div>
                <h3 class="font-display text-xl font-semibold text-white mb-1">
                  {{ item.name }}
                </h3>
                <p class="text-white/60 text-xs uppercase">
                  {{ item.category }}
                </p>
              </div>
              <p class="text-white/70 text-sm line-clamp-2 min-h-[2.5rem]">
                {{ item.description }}
              </p>
              <div class="flex items-center justify-between pt-2">
                <div class="text-2xl font-semibold text-white">
                  €{{ item.price }}
                </div>
                <button
                  @click="openItemModal(item)"
                  class="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-gold/20"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>

    <!-- Item Modal -->
    <div
      v-if="selectedItem"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="closeItemModal"
    >
      <div
        class="bg-black/95 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="relative">
          <img
            :src="selectedItem.image"
            :alt="selectedItem.name"
            class="w-full h-64 object-cover"
          />
          <button
            @click="closeItemModal"
            class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors flex items-center justify-center"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <h2 class="text-3xl font-display font-semibold text-white mb-2">
              {{ selectedItem.name }}
            </h2>
            <p class="text-white/60 text-sm uppercase">
              {{ selectedItem.category }}
            </p>
          </div>
          <p class="text-white/80 leading-relaxed">
            {{ selectedItem.description }}
          </p>
          <div
            class="flex items-center justify-between py-4 border-t border-white/10"
          >
            <div class="text-3xl font-bold text-gold">
              €{{ selectedItem.price }}
            </div>
            <div class="flex items-center gap-3">
              <button
                @click="decreaseQuantity"
                class="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span class="text-white text-lg font-semibold w-8 text-center">{{
                quantity
              }}</span>
              <button
                @click="increaseQuantity"
                class="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              @click="addToCart('room')"
              class="flex-1 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Add to Room Service
            </button>
            <button
              @click="addToCart('cart')"
              class="flex-1 rounded-lg bg-gold px-6 py-3 text-black font-semibold hover:bg-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Sidebar -->
    <div
      v-if="showCart"
      class="fixed right-0 top-0 h-full w-full sm:w-96 bg-black/95 border-l border-white/20 z-50 overflow-y-auto"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-display font-semibold text-white">Cart</h2>
          <button
            @click="showCart = false"
            class="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div v-if="cart.length === 0" class="text-center py-12">
          <p class="text-white/60">Your cart is empty</p>
        </div>
        <div v-else class="space-y-4">
          <div
            v-for="(item, index) in cart"
            :key="index"
            class="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-cover rounded-lg"
            />
            <div class="flex-1">
              <h3 class="text-white font-semibold">{{ item.name }}</h3>
              <p class="text-white/60 text-sm">Qty: {{ item.quantity }}</p>
              <p class="text-gold font-semibold">
                €{{ item.price * item.quantity }}
              </p>
            </div>
            <button
              @click="removeFromCart(index)"
              class="text-white/60 hover:text-white"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
          <div class="border-t border-white/10 pt-4">
            <div class="flex justify-between text-white mb-4">
              <span class="text-lg font-semibold">Total</span>
              <span class="text-2xl font-bold text-gold"
                >€{{ totalPrice }}</span
              >
            </div>
            <button
              @click="showPayment = true"
              class="w-full rounded-lg bg-gold px-6 py-3 text-black font-semibold hover:bg-white transition-colors"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Modal -->
    <div
      v-if="showPayment"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click.self="showPayment = false"
    >
      <div
        class="bg-black/95 border border-white/20 rounded-2xl max-w-md w-full p-6"
        @click.stop
      >
        <h2 class="text-2xl font-display font-semibold text-white mb-6">
          Payment
        </h2>
        <div class="space-y-4 mb-6">
          <div class="flex justify-between text-white">
            <span>Total Amount</span>
            <span class="text-xl font-bold text-gold">€{{ totalPrice }}</span>
          </div>
          <div class="flex gap-3">
            <button
              @click="processPayment('cash')"
              class="flex-1 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Cash
            </button>
            <button
              @click="processPayment('card')"
              class="flex-1 rounded-lg bg-gold px-6 py-3 text-black font-semibold hover:bg-white transition-colors"
            >
              Card
            </button>
          </div>
        </div>
        <button
          @click="showPayment = false"
          class="w-full rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Cart Button -->
    <button
      v-if="cart.length > 0"
      @click="showCart = true"
      class="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gold text-black font-bold shadow-lg shadow-gold/30 hover:bg-white transition-colors flex items-center justify-center z-40"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span
        class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center"
      >
        {{ cart.length }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
const categories = [
  "All",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
  "Chef Special",
];
const selectedCategory = ref("All");
const selectedItem = ref(null);
const quantity = ref(1);
const showCart = ref(false);
const showPayment = ref(false);
const cart = ref([]);

// Menu items data (simulating API response)
const menuItems = [
  // Appetizers
  {
    id: "truffle-risotto",
    name: "Truffle Risotto",
    category: "Appetizers",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1400&auto=format&fit=crop",
    description: "Creamy Arborio rice with black truffle and Parmesan cheese.",
  },
  {
    id: "foie-gras",
    name: "Foie Gras",
    category: "Appetizers",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    description: "Pan-seared foie gras with fig jam and brioche toast.",
  },
  {
    id: "lobster-bisque",
    name: "Lobster Bisque",
    category: "Appetizers",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=1400&auto=format&fit=crop",
    description: "Rich and creamy lobster bisque with cognac and cream.",
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    category: "Appetizers",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400&auto=format&fit=crop",
    description: "Fresh mozzarella, tomatoes, basil, and balsamic reduction.",
  },
  // Main Course
  {
    id: "lobster-thermidor",
    name: "Lobster Thermidor",
    category: "Main Course",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    description:
      "French classic with fresh lobster, creamy sauce, and Gruyère cheese.",
  },
  {
    id: "filet-mignon",
    name: "Filet Mignon",
    category: "Main Course",
    price: 58,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",
    description:
      "Tender beef filet with red wine reduction and roasted vegetables.",
  },
  {
    id: "duck-confit",
    name: "Duck Confit",
    category: "Main Course",
    price: 52,
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop",
    description: "Slow-cooked duck leg with orange glaze and potato gratin.",
  },
  {
    id: "salmon-teriyaki",
    name: "Salmon Teriyaki",
    category: "Main Course",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1400&auto=format&fit=crop",
    description:
      "Grilled salmon with teriyaki sauce, rice, and steamed vegetables.",
  },
  {
    id: "pasta-carbonara",
    name: "Pasta Carbonara",
    category: "Main Course",
    price: 36,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400&auto=format&fit=crop",
    description:
      "Classic Roman pasta with pancetta, eggs, and Pecorino cheese.",
  },
  {
    id: "beef-wellington",
    name: "Beef Wellington",
    category: "Main Course",
    price: 72,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",
    description: "Prime beef wrapped in puff pastry with mushroom duxelles.",
  },
  {
    id: "chicken-cordon-bleu",
    name: "Chicken Cordon Bleu",
    category: "Main Course",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1400&auto=format&fit=crop",
    description: "Breaded chicken with ham and cheese, served with fries.",
  },
  {
    id: "seafood-platter",
    name: "Seafood Platter",
    category: "Main Course",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    description: "Assorted fresh seafood with lemon butter and herbs.",
  },
  // Desserts
  {
    id: "chocolate-souffle",
    name: "Chocolate Soufflé",
    category: "Desserts",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop",
    description:
      "Warm chocolate soufflé with vanilla ice cream and berry compote.",
  },
  {
    id: "creme-brulee",
    name: "Crème Brûlée",
    category: "Desserts",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1400&auto=format&fit=crop",
    description: "Classic French custard with caramelized sugar topping.",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    category: "Desserts",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1400&auto=format&fit=crop",
    description: "Italian dessert with coffee, mascarpone, and cocoa.",
  },
  {
    id: "apple-tart",
    name: "Apple Tart",
    category: "Desserts",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1400&auto=format&fit=crop",
    description: "French apple tart with vanilla ice cream.",
  },
  // Beverages
  {
    id: "wine-selection",
    name: "Wine Selection",
    category: "Beverages",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1400&auto=format&fit=crop",
    description: "Premium wine selection from our cellar.",
  },
  {
    id: "champagne",
    name: "Champagne",
    category: "Beverages",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1400&auto=format&fit=crop",
    description: "Dom Pérignon or Veuve Clicquot.",
  },
  {
    id: "cocktail",
    name: "Signature Cocktail",
    category: "Beverages",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1400&auto=format&fit=crop",
    description: "House special cocktail crafted by our mixologist.",
  },
  {
    id: "coffee",
    name: "Espresso",
    category: "Beverages",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
    description: "Premium Italian espresso.",
  },
  // Chef Special
  {
    id: "chef-tasting",
    name: "Chef Tasting Menu",
    category: "Chef Special",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    description: "7-course tasting menu curated by our executive chef.",
  },
  {
    id: "degustation",
    name: "Degustation Menu",
    category: "Chef Special",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    description: "5-course degustation with wine pairing.",
  },
  {
    id: "romantic-dinner",
    name: "Romantic Dinner",
    category: "Chef Special",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    description: "Special romantic dinner for two with champagne.",
  },
  {
    id: "chef-table",
    name: "Chef Table Experience",
    category: "Chef Special",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop",
    description: "Exclusive chef table with personalized menu.",
  },
];

const filteredItems = computed(() => {
  if (selectedCategory.value === "All") {
    return menuItems;
  }
  return menuItems.filter((item) => item.category === selectedCategory.value);
});

const totalPrice = computed(() => {
  return cart.value.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );
});

function openItemModal(item: any) {
  selectedItem.value = item;
  quantity.value = 1;
}

function closeItemModal() {
  selectedItem.value = null;
  quantity.value = 1;
}

function increaseQuantity() {
  quantity.value++;
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}

function addToCart(type: string) {
  if (selectedItem.value) {
    const cartItem = {
      ...selectedItem.value,
      quantity: quantity.value,
      type: type, // 'cart' or 'room'
    };
    cart.value.push(cartItem);
    closeItemModal();
    if (type === "cart") {
      showCart.value = true;
    } else {
      alert("Added to room service!");
    }
  }
}

function removeFromCart(index: number) {
  cart.value.splice(index, 1);
}

function processPayment(method: string) {
  alert(`Payment of €${totalPrice.value} processed via ${method}. Thank you!`);
  cart.value = [];
  showPayment.value = false;
  showCart.value = false;
}

// Check if item is selected from URL
const route = useRoute();
onMounted(() => {
  if (route.query.item) {
    const item = menuItems.find((i) => i.id === route.query.item);
    if (item) {
      openItemModal(item);
    }
  }
});
</script>
