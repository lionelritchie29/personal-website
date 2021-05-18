<template>
  <div class="bg-primary">
    <div class="container pb-16">
      <div class="flex flex-col md:flex-row md:pt-12">
        <div class="mt-8 md:w-1/2">
          <div class="md:w-4/6 mx-auto">
            <h1
              class="text-white font-semibold text-2xl text-center md:text-left"
            >
              Got a Project ?
              <br />Let me know.
            </h1>
            <div class="mt-12 flex justify-center">
              <img src="../../assets/images/project.svg" alt="project" />
            </div>
          </div>
        </div>

        <div class="mt-8 pb-12 md:w-1/2">
          <div class="md:w-4/6 mx-auto">
            <h1
              class="text-white font-semibold text-2xl text-center md:text-left"
            >
              Get in touch.
            </h1>
            <div class="kwes-form">
              <form
                method="POST"
                action="https://kwes.io/api/foreign/forms/OlqMJdcyQZKKbRoWAt51"
                success-message="Thank you! I will respond to your message as soon as possible."
              >
                <div class="mt-8">
                  <label
                    class="block text-white font-semibold text-sm"
                    for="name"
                    >Your name</label
                  >
                  <input
                    type="text"
                    class="w-full px-2 bg-transparent border-b text-lg pt-2 text-white outline-none"
                    name="name"
                    required
                  />
                </div>

                <div class="mt-8">
                  <label
                    class="block text-white font-semibold text-sm"
                    for="name"
                    >Your fancy email</label
                  >
                  <input
                    type="email"
                    class="w-full px-2 bg-transparent border-b text-lg pt-2 text-white outline-none"
                    name="email"
                    required
                  />
                </div>

                <div class="mt-8">
                  <label
                    class="block text-white font-semibold text-sm"
                    for="name"
                    >Your needs</label
                  >
                  <select
                    name="needs"
                    class="w-full px-2 bg-transparent border-b text-lg pt-2 text-white outline-none"
                  >
                    <option value="website" class="text-primary"
                      >Create Website</option
                    >
                    <option value="collaborate" class="text-primary"
                      >Collaborate</option
                    >
                    <option value="discuss" class="text-primary"
                      >Discussion</option
                    >
                    <option value="chat" class="text-primary">Feedback</option>
                  </select>
                </div>

                <div class="mt-8">
                  <label
                    class="block text-white font-semibold text-sm"
                    for="name"
                    >Tell me about it</label
                  >
                  <textarea
                    name="message"
                    class="w-full px-2 bg-transparent border-b text-lg pt-2 text-white outline-none"
                  ></textarea>
                </div>
                <div class="text-right mt-2">
                  <button type="submit">
                    <font-awesome-icon
                      icon="arrow-right"
                      size="2x"
                      class="text-secondary transition duration-300 transform hover:rotate-360"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  mounted() {
    let kwesScript = document.createElement("script");

    kwesScript.setAttribute("src", "https://kwes.io/js/kwes.js");

    document.head.appendChild(kwesScript);
  },
};
</script>

<style></style>
