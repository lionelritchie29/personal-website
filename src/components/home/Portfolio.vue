<template>
  <div class="bg-primary-dark pt-32">
    <div class="container pb-16">
      <div class="flex flex-col md:flex-row justify-around">
        <div class="w-full md:w-3/6 lg:w-2/6">
          <h3 class="text-gray-600 font-semibold text-lg">~ Portfolio</h3>
          <h1 class="text-white font-bold text-3xl pb-4">My works.</h1>
          <p class="text-gray-600 text-sm pb-4">For more, click the button bellow.</p>
          <router-link
            to="/works"
            class="underline text-secondary hover:text-secondary-light font-semibold"
          >
            Explore More
            <font-awesome-icon
              icon="arrow-right"
              class="ml-2 transition duration-300 transform hover:rotate-360"
            />
          </router-link>
        </div>

        <div
          class="text-center shadow mt-16 md:-mb-40 flex justify-center md:block transition duration-300 transform hover:-translate-y-3"
        >
          <div>
            <img
              src="../../assets/images/portfolio/pedro.jpg"
              title="Pedro"
              class="w-full md:w-5/6"
              alt="pedro"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-around mt-12">
        <div
          class="flex justify-center shadow md:block transition duration-300 transform hover:-translate-y-3"
        >
          <div>
            <img
              src="../../assets/images/portfolio/foodie.jpg"
              class="w-full md:w-5/6"
              alt="dummy port"
              title="Foodie"
            />
          </div>
        </div>

        <div
          class="flex justify-center shadow md:block mt-12 md:mt-64 transition duration-300 transform hover:-translate-y-3"
        >
          <div>
            <img
              src="../../assets/images/portfolio/casterwoods.jpg"
              class="w-full md:w-5/6"
              alt="dummy port"
              title="Casterwoods"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio"
};
</script>

<style></style>
