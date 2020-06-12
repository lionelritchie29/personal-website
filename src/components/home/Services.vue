<template>
  <div class="-mb-32 md:-mb-24">
    <div class="container flex flex-col md:flex-row justify-around">
      <ServiceItem
        data-aos="fade-up"
        :titleFirst="'Web'"
        :titleSecond="'Design'"
        :url="'web-design'"
      />
      <ServiceItem
        data-aos="fade-up"
        data-aos-delay="200"
        :titleFirst="'Static'"
        :titleSecond="'Website'"
        :url="'static-web'"
      />
      <ServiceItem
        data-aos="fade-up"
        data-aos-delay="300"
        :titleFirst="'Custom'"
        :titleSecond="'Website'"
        :url="'custom-web'"
      />
    </div>
  </div>
</template>

<script>
import ServiceItem from "./items/ServiceItem";

export default {
  name: "service",
  components: {
    ServiceItem,
  },
};
</script>

<style></style>
