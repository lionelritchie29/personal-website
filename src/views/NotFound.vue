<template>
  <div class="bg-primary-dark">
    <div class="h-screen flex flex-col justify-center items-center container">
      <div class="w-full md:w-1/2">
        <img src="../assets/images/notfound.svg" alt="notfound" />
      </div>
      <h1 class="font-bold text-2xl text-secondary mt-4">404 Not Found</h1>
      <router-link to="/">
        <button
          class="bg-secondary hover:bg-secondary-light px-2 py-1 rounded font-semibold mt-2"
        >
          Go Back
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-found",
};
</script>

<style></style>
