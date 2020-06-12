<template>
  <div class="pb-8 md:pb-0">
    <div
      class="bg-primary-light w-5/6 md:w-full mx-auto text-white p-4 rounded service-item-shadow hover:bg-secondary-light cursor-pointer transition duration-300 transform hover:-translate-y-4"
    >
      <div class="flex justify-between">
        <h2 class="text-2xl lg:text-3xl md:mr-20 lg:mr-32">
          {{titleFirst}}
          <br />
          {{titleSecond}}
        </h2>
        <div>
          <img :src="getImgUrl('service-corner')" alt="corner" />
        </div>
      </div>
      <div class="w-1/6 mt-20 lg:mt-24">
        <img :src="getImgUrl(url)" alt="web-design" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-item",
  props: ["titleFirst", "titleSecond", "url"],
  methods: {
    getImgUrl(url) {
      var images = require.context("../../../assets/images/", false, /\.svg$/);
      return images("./" + url + ".svg");
    }
  }
};
</script>

<style>
</style>