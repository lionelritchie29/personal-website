<template>
  <div class="-mb-32 md:-mb-24 bg-primary">
    <div class="container flex flex-col md:flex-row justify-around">
      <ServiceItem
        :titleFirst="'Web'"
        :titleSecond="'Design'"
        :url="'web-design'"
      />
      <ServiceItem
        :titleFirst="'Static'"
        :titleSecond="'Website'"
        :url="'static-web'"
      />
      <ServiceItem
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
