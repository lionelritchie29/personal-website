<template>
  <div class="bg-primary-dark">
    <div class="container mx-auto">
      <div class="lg:pt-3 pt-6 lg:px-10">
        <div class="flex flex-row justify-between p-3">
          <router-link to="/">
            <img
              class="w-12 transition duration-500 transform hover:rotate-360"
              src="../assets/images/brand.svg"
              alt="brand-logo"
            />
          </router-link>

          <div>
            <div class="block lg:hidden">
              <font-awesome-icon
                icon="bars"
                @click="sidebar = true"
                size="lg"
                class="text-secondary cursor-pointer"
              />
            </div>

            <transition name="fade">
              <div
                v-if="sidebar"
                class="sidenav text-center border-b-8 border-secondary border-t-8"
                :class="{ show: sidebar }"
              >
                <a href="javascript:void(0)" class="closebtn" @click="sidebar = false">&times;</a>

                <div class="text-2xl">
                  <router-link to="/" class="pt-12">
                    <span
                      :class="{'text-secondary' : this.$route.name == 'Home'}"
                      @click="sidebar = false"
                    >Home</span>
                  </router-link>
                  <router-link to="/services" class="pt-12">
                    <span
                      :class="{'text-secondary' : this.$route.name == 'Services'}"
                      @click="sidebar = false"
                    >Services</span>
                  </router-link>
                  <router-link to="/works" class="pt-12">
                    <span
                      :class="{'text-secondary' : this.$route.name == 'Works'}"
                      @click="sidebar = false"
                    >Works</span>
                  </router-link>
                  <router-link to="/contact" class="pt-12">
                    <span
                      :class="{'text-secondary' : this.$route.name == 'Contact'}"
                      @click="sidebar = false"
                    >Contacts</span>
                  </router-link>
                  <router-link to="/about" class="pt-12">
                    <span
                      :class="{'text-secondary' : this.$route.name == 'About'}"
                      @click="sidebar = false"
                    >About</span>
                  </router-link>
                </div>
                <div
                  class="flex justify-center mt-20 transition duration-300 transform hover:rotate-360"
                >
                  <img src="../assets/images/brand.svg" class="w-12" alt="brand" />
                </div>
              </div>
            </transition>

            <div class="hidden lg:block text-white">
              <ul class="flex flex-row font-semibold">
                <!-- <li class="mr-8">
                  <router-link to="/" class="border-b-2 hover:border-secondary"
                    >Home</router-link
                  >
                </li>-->
                <li class="mr-8">
                  <router-link
                    to="/services"
                    :class="{'border-secondary' : this.$route.name == 'Services'}"
                    class="border-b-2 hover:border-secondary"
                  >Services</router-link>
                </li>
                <li class="mr-8">
                  <router-link
                    to="/works"
                    :class="{'border-secondary' : this.$route.name == 'Works'}"
                    class="border-b-2 hover:border-secondary"
                  >Works</router-link>
                </li>
                <li class="mr-8">
                  <router-link
                    to="/contact"
                    :class="{'border-secondary' : this.$route.name == 'Contact'}"
                    class="border-b-2 hover:border-secondary"
                  >Contact</router-link>
                </li>
                <li class="mr-8">
                  <router-link
                    to="/about"
                    :class="{'border-secondary' : this.$route.name == 'About'}"
                    class="border-b-2 hover:border-secondary"
                  >About</router-link>
                </li>
              </ul>
            </div>
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
  name: "navbar",
  data() {
    return {
      sidebar: false
    };
  }
};
</script>

<style scoped>
.show {
  width: 100% !important;
  background: rgba(0, 0, 0, 0.4);
  transition: width 2s;
}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  text-decoration: none;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #ffc25c;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
