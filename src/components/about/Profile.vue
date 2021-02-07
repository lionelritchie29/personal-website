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
            <h3 class="text-secondary font-semibold text-center md:text-left">
              a bit about my self
            </h3>
            <p class="text-white mt-5">
              That's my face. Currently a computer science student and a lab
              teaching assistant at Binus University. Passionate about web
              development and aim to be an expert at Full-Stack Web Development.
              Reading books is also one of my hobby.
            </p>

            <div class="flex mt-8 flex-wrap">
              <!-- <div> -->
              <div v-for="icon in icons" :key="icon.id">
                <div v-if="icon.type == 'font-awesome'">
                  <font-awesome-icon
                    :icon="icon.name"
                    :title="icon.title"
                    class="mr-4 transition duration-300 transform hover:-translate-y-2 text-secondary"
                    size="2x"
                  />
                </div>
                <div
                  v-else
                  class="mr-4 transition duration-300 transform hover:-translate-y-2 text-secondary"
                >
                  <img
                    style="height: 50px !important"
                    :src="icon.src"
                    :alt="icon.name"
                    :title="icon.title"
                  />
                </div>
              </div>
              <!-- </div> -->
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
          title: "HTML5",
          type: "font-awesome",
        },
        {
          id: 2,
          name: ["fab", "css3-alt"],
          title: "CSS3",
          type: "font-awesome",
        },
        {
          id: 3,
          name: ["fab", "js"],
          title: "Javascript",
          type: "font-awesome",
        },
        {
          id: 4,
          name: ["fab", "php"],
          title: "PHP",
          type: "font-awesome",
        },
        {
          id: 5,
          name: ["fab", "bootstrap"],
          title: "Bootstrap",
          type: "font-awesome",
        },
        {
          id: 6,
          name: ["fab", "laravel"],
          title: "Laravel",
          type: "font-awesome",
        },
        {
          id: 7,
          name: ["fab", "vuejs"],
          title: "VueJS",
          type: "font-awesome",
        },
        {
          id: 8,
          name: ["fab", "angular"],
          title: "Angular",
          type: "font-awesome",
        },
        {
          id: 9,
          name: "Go",
          title: "Go",
          type: "svg",
          src: "https://blog.golang.org/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        },
        {
          id: 10,
          name: "Graphql",
          title: "Graphql",
          type: "svg",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
        },
        {
          id: 11,
          name: "Tailwind CSS",
          title: "Tailwind CSS",
          type: "svg",
          src:
            "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
      ],
    };
  },
};
</script>

<style></style>
