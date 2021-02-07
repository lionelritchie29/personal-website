<template>
  <div class="bg-primary-dark">
    <div class="container py-10">
      <h1
        class="text-secondary text-xl font-semibold mb-4 text-center md:text-left"
      >
        some certificate
      </h1>
      <div class="grid md:grid-cols-2 gap-8">
        <CertificateItem
          v-for="cert in certificates"
          :title="cert.title"
          :url="cert.url"
          :key="cert.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CertificateItem from "./items/CerificateItem";

export default {
  name: "certificate",
  components: {
    CertificateItem,
  },
  data() {
    return {
      certificates: [
        {
          id: 1,
          title: "Dicoding Belajar Web Dasar",
          url: "dicoding_web_dasar",
        },
        {
          id: 2,
          title: "Dicoding Fundamental Front-End Web Development",
          url: "dicoding_web_fundamental",
        },
        {
          id: 3,
          title: "Dicoding Membangun Progressive Web Apps",
          url: "dicoding_mpwa",
        },
        {
          id: 4,
          title: "Dicoding SOLID",
          url: "dicoding_solid",
        },
        {
          id: 5,
          title: "Dicoding Menjadi Front End Web Developer Expert",
          url: "dicoding-mfwde",
        },
        {
          id: 6,
          title: "BWA Laravue",
          url: "bwa_laravue",
        },
      ],
    };
  },
};
</script>

<style></style>
