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
  faHtml5,
  faCss3Alt,
  faJs,
  faLaravel,
  faVuejs,
  faPhp,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  faGlobe,
  faArrowRight,
  faBars,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faGlobe,
  faArrowRight,
  faGithub,
  faBars,
  faHtml5,
  faCss3Alt,
  faJs,
  faLaravel,
  faVuejs,
  faPhp,
  faBootstrap,
  faExternalLinkAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
