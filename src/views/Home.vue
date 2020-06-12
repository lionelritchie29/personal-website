<template>
  <div>
    <Main />
    <ShortDesc />
    <Service />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Main from "../components/home/Main";
import ShortDesc from "../components/home/ShortDesc";
import Service from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";

export default {
  name: "Home",
  components: {
    Main,
    ShortDesc,
    Service,
    Portfolio,
    Contact
  }
};
</script>
