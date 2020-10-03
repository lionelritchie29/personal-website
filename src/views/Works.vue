<template>
  <div class="bg-primary-dark">
    <div class="container">
      <div class="md:hidden">
        <div class="mt-12 sm:w-2/3 mx-auto">
          <img src="../assets/images/portfolio/header.svg" alt="header" />
        </div>
        <p class="text-white text-center">Some of my works</p>
      </div>

      <h1 class="font-semibold text-secondary text-xl mt-16">Portfolio</h1>
      <PortfolioItem v-for="port in portfolio" :key="port.id" :port="port" />

      <div class="pt-4 mt-16 pb-12 border-t-4 border-secondary">
        <p class="text-white">
          Work inquiry ? Let's
          <router-link class="text-secondary" to="/contact">Chat</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioItem from "../components/portfolio/items/PortItem";

export default {
  name: "works",
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolio: [
        {
          id: 1,
          name: "Pedro",
          desc:
            "I created this project for Dicoding’s ‘Belajar Dasar Pemrograman Web’ submission. It requires the student to create a website with HTML5 semantic meaning and a side bar with the student's personal identity.",
          url: "pedro.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://darrow.xyz/pedro/"
        },
        {
          id: 2,
          name: "Foodie",
          desc:
            "Foodie, as the name implies, is a simple web app that provide information about food. Features consist of showing random recipe, search for a specific recipe, generate a meal plan, and generate random trivia and joke. Data are provided by Spoonacular Food API.",
          url: "foodie.jpg",
          position: "right",
          style: "md:mr-12 md:ml-40",
          link: "https://darrow.xyz/dicoding2/"
        },
        {
          id: 3,
          name: "ByCasterwoods",
          desc:
            "Casterwoods provide the user to customize their own gift box by choosing what is inside the box. In this project, I am responsible for the front-end side, while my friend did the back-end side. My responsibilities consist of design and create the user interface, cart system, and guard the route.",
          url: "casterwoods.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://bycasterwoods.com/"
        },
        {
          id: 4,
          name: "FinTalks",
          desc:
            "This is a Progressive Web Application (PWA), meaning it could act like a native mobile application with features such as add to home screen and some/all features still could be used while offline as long as the page(s) is already visited once while online. FinTalks is a fictional independent financial advisor company in Indonesia. ",
          url: "fintalks.jpg",
          position: "right",
          style: "md:mr-12 md:ml-40",
          link: "https://fin-talks.web.app/"
        },
        {
          id: 5,
          name: "Football Spa",
          desc:
            "FootballSpa (Football Spain) is a non-profit site that display matches, teams, and standings of all football teams from Spain. Football data provided by the Football-Data.org API. Features consist of show upcoming matches, show all teams, show current standings, show team detail, and add to favorite (and also show notification after that!). This web app also uses Progressive Web Apps (PWA) aprroach, meaning it could act like a native mobile application (add to home screen, show notification, used while offline).",
          url: "football-spa.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://football-spa.web.app/"
        }
      ]
    };
  }
};
</script>

<style>
</style>