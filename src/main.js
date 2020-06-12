import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// tailwind
import "./assets/style/app.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe, faArrowRight } from "@fortawesome/free-solid-svg-icons";
library.add(
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faGlobe,
  faArrowRight,
  faGithub
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// aos
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
