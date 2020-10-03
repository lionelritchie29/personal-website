<template>
  <div>
    <h1
      class="text-secondary md:text-left font-bold text-2xl mt-16 text-center"
    >
      What I can do
    </h1>

    <ServiceItem
      v-for="service in services"
      :key="service.id"
      :service="service"
    />
  </div>
</template>

<script>
import ServiceItem from "./items/ServiceItem";

export default {
  name: "service-offer",
  components: {
    ServiceItem,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Web Design",
          desc: "Need a web design ? I could help you with that!",
          position: "left",
          url: "web-design",
        },
        {
          id: 2,
          title: "Business / Personal Landing Page",
          desc:
            "Your business need a website to showcase your product or to show about your company profile  to attract more customers ? or even yourself want to create your own skills portfolio website ? I would be very happy to help you! ",
          position: "right",
          url: "landing-page",
        },
        {
          id: 3,
          title: "E-Commerce",
          desc:
            "You want to expand your business by having your own online e-commerce web ? Let’s collaborate! ",
          position: "left",
          url: "e-commerce",
        },
        {
          id: 4,
          title: "Custom Website",
          desc:
            "Did not find any match from services above ? Dont’ worry, you could talk to me directly and I would do my best to fullfil your needs.",
          position: "right",
          url: "custom-web",
        },
      ],
    };
  },
};
</script>

<style></style>
