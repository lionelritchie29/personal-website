<template>
  <div class="bg-primary-dark">
    <div class="container py-20">
      <Main />
      <Service class="xl:w-10/12 xl:mx-auto" />

      <div class="text-white pt-4 border-t-4 border-secondary mt-16">
        <p>
          Find something that fit your needs ? Great! Now you could fill out
          this
          <router-link class="text-secondary hover:underline" to="/contact"
            >form</router-link
          >
          to talk more about it. Don’t hesitate to ask me if you have any
          questions, I would love to help!
        </p>

        <h2 class="text-secondary font-semibold text-xl mt-10">Notes</h2>
        <ul>
          <li>
            - The website will be fully responsive, means it will looks good for
            all devices (phone and desktop
          </li>
          <li>- Hosting not included</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Main from "../components/services/Main";
import Service from "../components/services/Service";

export default {
  name: "services",
  components: {
    Main,
    Service,
  },
};
</script>

<style></style>
