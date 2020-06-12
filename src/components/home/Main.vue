<template>
  <div class="bg-primary-dark">
    <div class="h-screen container flex justify-center">
      <div class="flex flex-col md:flex-row-reverse lg:mx-24">
        <!-- heading images -->
        <div class="pt-20 md:pt-0 flex content-center">
          <img
            src="../../assets/images/heading-image.svg"
            alt="heading-image"
          />
        </div>
        <!-- end of heading images -->

        <!-- heading text -->
        <div class="flex items-center">
          <div
            class="text-center md:text-left text-white mt-10 md:mt-0 md:w-5/6"
          >
            <h1 class="font-bold text-3xl xl:text-5xl">Lionel Ritchie</h1>
            <div class="flex- flex-row">
              <h3 class="font-semibold text-2xl">
                <span class="border-b-8 border-secondary">Web</span> Enthusiast
                <font-awesome-icon
                  icon="globe"
                  class="transition duration-300 hover:text-secondary transform hover:rotate-180"
                />
              </h3>
            </div>
            <p class="mt-3 text-lg w-5/6 md:w-full mx-auto">
              Developer and Student, based in Jakarta, Indonesia.
            </p>
            <div class="flex flex-col md:flex-row mt-4 items-center">
              <router-link
                to="/contact"
                class="text-center bg-secondary hover:bg-secondary-light w-3/5 md:mr-4 lg:mr-6 text-primary font-semibold px-6 py-2 rounded-full"
              >
                Contact
              </router-link>

              <router-link
                to="/works"
                class="text-center bg-transparent hover:bg-secondary-light hover:text-primary hover:border-opacity-0 w-3/5 mt-4 md:mt-0 border border-secondary text-secondary font-semibold px-6 py-2 rounded-full"
              >
                Works
              </router-link>
            </div>
          </div>
        </div>
        <!-- end of heading text -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPage",
};
</script>

<style scoped></style>
