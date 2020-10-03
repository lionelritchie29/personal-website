<template>
  <div class="bg-primary-dark">
    <div class="container pt-10 pb-20">
      <div class="flex flex-col md:flex-row-reverse">
        <div class="md:w-1/2">
          <div class="md:w-5/6 mx-auto">
            <div>
              <img src="../assets/images/contact.svg" alt="contact" />
            </div>
            <p class="text-white mt-6">
              I would be very happy to hear from you. Let me know if I could
              help you to reach your goals!
            </p>

            <div class="text-secondary mt-4">
              <h5 class="font-semibold">Let’s collaborate</h5>
              <p>lionel.ritchie@yahoo.com</p>
            </div>
          </div>
        </div>

        <div class="mt-20 md:w-1/2 md:mt-0">
          <div class="md:w-5/6 lg:w-4/6 mx-auto">
            <h1
              class="text-secondary hidden md:block font-semibold text-2xl"
            >Have something to say ?</h1>
            <h1 class="text-secondary text-2xl font-semibold">Fill out the form.</h1>

            <div class="kwes-form">
              <form
                method="POST"
                action="https://kwes.io/api/foreign/forms/liJa2wwjmwpNplDPmdPS"
                success-message="Thank you! I will respond to your message as soon as possible."
              >
                <div class="mt-8">
                  <label class="block text-white font-semibold text-sm" for="name">Your name</label>
                  <input
                    type="text"
                    class="w-full bg-transparent px-2 border-b text-lg pt-2 text-white outline-none"
                    name="name"
                    required
                  />
                </div>

                <div class="mt-8">
                  <label class="block text-white font-semibold text-sm" for="name">Your fancy email</label>
                  <input
                    type="email"
                    class="w-full bg-transparent px-2 border-b text-lg pt-2 text-white outline-none"
                    name="email"
                    required
                  />
                </div>

                <div class="mt-8">
                  <label class="block text-white font-semibold text-sm" for="name">Your needs</label>
                  <select
                    name="needs"
                    class="w-full px-2 bg-transparent border-b text-lg pt-2 text-white outline-none"
                  >
                    <option value="website" class="text-primary">I want to create a website ...</option>
                    <option value="collaborate" class="text-primary">I want to collaborate ...</option>
                    <option value="discuss" class="text-primary">I want to discuss ...</option>
                    <option value="chat" class="text-primary">I want to give feedback ...</option>
                  </select>
                </div>

                <div class="mt-8">
                  <label class="block text-white font-semibold text-sm" for="name">Your message</label>
                  <textarea
                    name="message"
                    class="w-full bg-transparent border mt-3 px-2 text-lg pt-2 text-white outline-none"
                  ></textarea>
                </div>
                <div class="text-right mt-2">
                  <button
                    class="bg-secondary px-2 py-1 rounded font-semibold hover:bg-secondary-light"
                  >
                    Send
                    <font-awesome-icon
                      icon="arrow-right"
                      class="text-primary transition duration-300 transform hover:rotate-360"
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
  }
};
</script>

<style></style>
