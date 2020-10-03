<template>
  <div class="mt-20 flex flex-col" :class="'md:flex-' + (isLeft ? 'row' : 'row-reverse')">
    <div class="md:w-1/3">
      <div class="sm:w-2/3 md:w-full mx-auto">
        <img :src="getImgUrl(service.url)" :alt="service.title" />
      </div>
    </div>

    <div class="md:w-2/3" :class="'md:' + (isLeft ? 'ml-4' : 'mr-4')">
      <div class="text-center md:text-left">
        <div
          class="border-2 mt-4 md:mt-0 font-semibold border-secondary rounded-full text-secondary inline-block px-4 py-2 text-center md:text-left"
        >{{ service.id }}</div>
      </div>

      <h4 class="text-secondary text-center font-semibold mt-2 md:text-left">{{ service.title }}</h4>
      <p class="text-white text-center md:text-left">{{ service.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-item",
  props: ["service"],
  methods: {
    getImgUrl(url) {
      var images = require.context(
        "../../../assets/images/services",
        false,
        /\.svg$/
      );
      return images("./" + url + ".svg");
    }
  },
  computed: {
    isLeft() {
      return this.service.position == "left" ? true : false;
    }
  }
};
</script>

<style></style>
