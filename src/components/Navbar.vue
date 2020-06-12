<template>
  <div class="bg-primary-dark">
    <div class="container mx-auto">
      <div class="lg:pt-3 lg:px-10">
        <div class="flex flex-row justify-between p-3">
          <a href="#">
            <img class="w-12" src="../assets/images/brand.svg" alt="brand-logo" />
          </a>

          <div class="hidden lg:block text-white">
            <ul class="flex flex-row font-semibold">
              <li class="mr-8">
                <a href="#" class="border-b-2 hover:border-secondary">Services</a>
              </li>
              <li class="mr-8">
                <a href="#" class="border-b-2 hover:border-secondary">Works</a>
              </li>
              <li class="mr-8">
                <a href="#" class="border-b-2 hover:border-secondary">Contact</a>
              </li>
              <li class="mr-8">
                <a href="#" class="border-b-2 hover:border-secondary">About</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
</style>
