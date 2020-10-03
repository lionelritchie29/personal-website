<template>
  <div class="mt-10 md:flex" :class="'md:flex-' + (isLeft ? 'row' : 'row-reverse')">
    <div class="md:w-1/3">
      <div class="sm:w-2/3 md:w-full mx-auto shadow">
        <img :src="getImgUrl(port.url)" alt="port" />
      </div>
    </div>

    <div class="md:w-2/3 sm:text-center md:text-left" :class="port.style">
      <div class="mt-3 md:mt-0">
        <div class="text-secondary flex">
          <h2 class="font-semibold md:text-xl">{{port.name}}</h2>
          <a class="ml-2 hover:text-secondary-light" :href="port.link" target="_blank">
            <font-awesome-icon title="Open in new tab" icon="external-link-alt" />
          </a>
        </div>
        <p class="text-white text-sm md:text-lg">{{port.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio-item",
  props: ["port"],
  computed: {
    isLeft() {
      return this.port.position == "left" ? true : false;
    }
  },
  methods: {
    getImgUrl(url) {
      var images = require.context(
        "../../../assets/images/portfolio",
        false,
        /\.png|jpg$/
      );
      return images("./" + url);
    }
  }
};
</script>

<style>
</style>