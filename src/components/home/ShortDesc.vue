<template>
  <div class="bg-primary">
    <div class="container pb-32">
      <!-- Card 1 -->
      <div
        class="lg:flex lg:flex-row-reverse lg:pt-16 justify-center items-center md:items-end"
      >
        <div
          class="-mb-16 lg:mb-0 pt-10 lg:pt-20 lg:-ml-32 lg:w-5/12 z-10 flex justify-center"
        >
          <img src="../../assets/images/image1.svg" alt="short-description" />
        </div>

        <div class="bg-primary-dark short-desc-shadow lg:w-7/12 rounded">
          <div class="text-secondary px-8 pb-4 lg:pr-32 pt-24 lg:pt-12">
            <h1 class="font-bold text-3xl">Hi,</h1>
            <p class="text-xl mt-2">
              Currently a teaching assistant and computer science student. Spend
              my spare time learning web development.
            </p>
            <p class="mt-20 lg:mt-32 xl:mt-40">lionel.ritchie@yahoo.com</p>
          </div>
        </div>
      </div>
      <!-- End of Card 1 -->

      <!-- Card 2 -->
      <div
        class="lg:flex lg:flex-row lg:mt-16 justify-center items-center md:items-end"
      >
        <div
          class="-mb-16 lg:mb-0 mt-10 lg:mt-20 lg:-mr-32 lg:w-5/12 z-10 flex justify-center"
        >
          <img src="../../assets/images/image2.svg" alt="short-description" />
        </div>

        <div class="bg-primary-dark short-desc-shadow lg:w-7/12 rounded">
          <div class="text-secondary px-8 pb-4 lg:pl-32 pt-24 lg:pt-12">
            <h1 class="font-bold text-3xl lg:text-4xl">What I do</h1>
            <p class="text-xl mt-2">
              I could help you reach wider range of audience and strengthen your
              business or personal brand by empowering yours with visually
              appealing and engaging website. Feel free to check my works down
              below!
            </p>
            <p class="mt-20 lg:mt-32 xl:mt-40 text-right font-bold text-xl">
              ~
            </p>
          </div>
        </div>
      </div>
      <!-- End of Card 3 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "short-desc",
};
</script>

<style></style>
