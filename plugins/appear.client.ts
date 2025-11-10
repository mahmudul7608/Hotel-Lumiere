import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("appear", {
    mounted(el: HTMLElement, binding) {
      const base = "opacity-0 translate-y-4";
      const active = binding.value?.active || "opacity-100 translate-y-0";
      const duration = binding.value?.duration || "duration-700";
      const easing = binding.value?.easing || "ease-out";
      
      // Remove SSR classes and add transition classes
      el.classList.remove(...active.split(" "));
      el.classList.add("transition-all", duration, easing);
      el.classList.add("will-change-transform", "opacity-0", "translate-y-4");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.remove(...base.split(" "));
              el.classList.add(...active.split(" "));
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
    },
  });
});
