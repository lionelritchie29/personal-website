<template>
  <div>
    <Quotes />
    <Profile />
    <Certificate />
  </div>
</template>

<script>
import Quotes from "../components/about/Quotes";
import Profile from "../components/about/Profile";
import Certificate from "../components/about/Certificate";

export default {
  name: "about",
  components: {
    Quotes,
    Profile,
    Certificate,
  },
};
</script>
