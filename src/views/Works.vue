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
    PortfolioItem,
  },
  data() {
    return {
      portfolio: [
        {
          id: 1,
          name: "Foodie",
          desc:
            "Foodie, as the name implies, is a simple web app that provide information about food. Features consist of showing random recipe, search for a specific recipe, generate a meal plan, and generate random trivia and joke. Data are provided by Spoonacular Food API.",
          url: "foodie.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://dicoding-foodie.netlify.app/",
        },
        {
          id: 2,
          name: "FinTalks",
          desc:
            "This is a Progressive Web Application (PWA), meaning it could act like a native mobile application with features such as add to home screen and some/all features still could be used while offline as long as the page(s) is already visited once while online. FinTalks is a fictional independent financial advisor company in Indonesia. ",
          url: "fintalks.jpg",
          position: "right",
          style: "md:mr-12 md:ml-40",
          link: "https://fin-talks.web.app/",
        },
        {
          id: 3,
          name: "Football Spa",
          desc:
            "FootballSpa (Football Spain) is a non-profit site that display matches, teams, and standings of all football teams from Spain. Football data provided by the Football-Data.org API. Features consist of show upcoming matches, show all teams, show current standings, show team detail, and add to favorite (and also show notification after that!). This web app also uses Progressive Web Apps (PWA) aprroach, meaning it could act like a native mobile application (add to home screen, show notification, used while offline).",
          url: "football-spa.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://football-spa.web.app/",
        },
        {
          id: 4,
          name: "Restoqu",
          desc:
            "Restoqu is an app that I create for Dicoding's final class on Front End Web Developer Learning Path (Being an expert front-end web developer) submission. The app provides information about restaurants and their detail. The app implements modern web technology features such as Progressive Web Apps,  indexed DB, and native web components.",
          url: "restoqu.jpg",
          position: "right",
          style: "md:mr-12 md:ml-40",
          link: "https://restoqu.netlify.app",
        },
        {
          id: 5,
          name: "Staem (Steam clone)",
          desc:
            "Steam clone for TPA (Test Progressive of Assistant) Web as a teaching assistant at Binus University. Available features: Login, Register (Sending OTP Email), Homepage, Game Detail (Info and Review), Search Game, Friends (Add, View, Pending Invites), Real-time chat, Redeem Wallet, Profile, Edit Profile, Points Shop, Community, Admin (Game, User, Promo), Inventory, Buy Game (Self), Cart System, Wishlist, and Market (Half). Front-end created with Angular, SCSS, and Apollo. Backend built using Postgresql, Go and Graphql. Credentials you can use: lionelritchie (account name) and lionel123 (password)",
          url: "staem.jpg",
          position: "left",
          style: "md:ml-12 md:mr-40",
          link: "https://staem.netlify.app",
        },
        {
          id: 6,
          name: "Gojek Homepage Clone",
          desc:
            "I created this not so-clone of Gojek's homepage to learn React.",
          url: "gojek.jpg",
          position: "right",
          style: "md:mr-12 md:ml-40",
          link: "https://gojek.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style></style>
