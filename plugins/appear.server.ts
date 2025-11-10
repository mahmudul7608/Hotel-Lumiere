import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // Register a no-op version of the appear directive for SSR
  nuxtApp.vueApp.directive("appear", {
    created(el: HTMLElement, binding) {
      // During SSR, just apply the final classes immediately
      const active = binding.value?.active || "opacity-100 translate-y-0";
      el.classList.add(...active.split(" "));
    },
  });
});

