<template>
  <div>
    <div>
      <img :src="getImgUrl(url)" alt="dicoding1" />
    </div>
    <p class="text-white">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "certificate-item",
  props: ["title", "url"],
  methods: {
    getImgUrl(url) {
      var images = require.context(
        "../../../assets/images/cert/",
        false,
        /\.jpg$/
      );
      return images("./" + url + ".jpg");
    },
  },
};
</script>

<style></style>
