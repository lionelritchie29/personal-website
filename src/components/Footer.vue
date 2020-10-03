<template>
  <div class="bg-primary-dark pt-16">
    <div class="text-center">
      <h4 class="font-semibold text-white text-lg">Stay Connected</h4>
      <h5 class="text-secondary mt-4 text-sm">Jakarta, Indonesia</h5>
      <h2 class="font-semibold text-white text-xl">hello@lionelritchie.com</h2>
      <p class="text-white">+62 877 8300 2325</p>
      <div class="flex justify-center mt-4">
        <a title="Linked In" href="https://www.linkedin.com/in/lionel-ritchie/" target="_blank">
          <font-awesome-icon
            class="mr-4 text-white transition duration-300 transform hover:-translate-y-1"
            :icon="['fab', 'linkedin-in']"
            size="2x"
          />
        </a>
        <a title="WhatsApp" href="https://wa.me/6287783002325" target="_blank">
          <font-awesome-icon
            class="mr-4 text-white transition duration-300 transform hover:-translate-y-1"
            :icon="['fab', 'whatsapp']"
            size="2x"
          />
        </a>
        <a title="Instagram" href="https://instagram.com/lionel_ritchie/" target="_blank">
          <font-awesome-icon
            class="mr-4 text-white transition duration-300 transform hover:-translate-y-1"
            :icon="['fab', 'instagram']"
            size="2x"
          />
        </a>
        <a title="Github" href="http://github.com/lionelritchie29" target="_blank">
          <font-awesome-icon
            class="text-white transition duration-300 transform hover:-translate-y-1"
            :icon="['fab', 'github']"
            size="2x"
          />
        </a>
      </div>
    </div>

    <div
      class="mt-24 mb-24 md:mt-8 md:mb-4 md:justify-between md:ml-3 flex flex-col items-center md:flex-row justify-center mx-auto"
    >
      <router-link to="/">
        <img
          src="../assets/images/brand.svg"
          class="w-16 transition duration-500 transform hover:rotate-360"
          alt="brand"
        />
      </router-link>

      <div
        class="md:mr-4 text-secondary cursor-pointer hover:underline mt-3 md:mt-0"
        @click="scrollToTop"
      >Back to Top</div>
    </div>

    <div class="mt-2 border-b-8 border-secondary"></div>
    <div class="border-b-8 border-secondary"></div>
  </div>
</template>

<script>
export default {
  name: "main-footer",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style></style>
