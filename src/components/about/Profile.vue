<template>
  <div class="bg-primary">
    <div class="container py-10">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <div class="md:w-4/6 mx-auto flex justify-center">
            <div>
              <img src="../../assets/images/profile.png" alt="profile-photo" />
            </div>
          </div>
        </div>

        <div class="pt-10 md:w-1/2">
          <div class="text-xl lg:text-2xl md:w-5/6">
            <h3 class="text-secondary font-semibold text-center md:text-left">a bit about my self</h3>
            <p class="text-white mt-5">
              That's my face. Currently a computer science student at Binus University and doing
              some web projects. Passionate about web development and aim to be
              an expert at Full-Stack Web Development. Reading books is also one of my hobby.
            </p>

            <div class="flex mt-8">
              <div>
                <font-awesome-icon
                  v-for="icon in icons"
                  :key="icon.id"
                  :icon="icon.name"
                  :title="icon.title"
                  class="mr-4 transition duration-300 transform hover:-translate-y-2 text-secondary"
                  size="2x"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      icons: [
        {
          id: 1,
          name: ["fab", "html5"],
          title: "HTML5"
        },
        {
          id: 2,
          name: ["fab", "css3-alt"],
          title: "CSS3"
        },
        {
          id: 3,
          name: ["fab", "js"],
          title: "Javascript"
        },
        {
          id: 4,
          name: ["fab", "php"],
          title: "PHP"
        },
        {
          id: 5,
          name: ["fab", "bootstrap"],
          title: "Bootstrap"
        },
        {
          id: 6,
          name: ["fab", "laravel"],
          title: "Laravel"
        },
        {
          id: 7,
          name: ["fab", "vuejs"],
          title: "VueJS"
        }
      ]
    };
  }
};
</script>

<style></style>
