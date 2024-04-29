<template>
  <div>
    <section class="pt-24">
      <div class="wrapper">
        <h1
          class="mb-9 max-w-[900px] font-secondary text-3xl text-heading lg:text-7xl"
        >
          Submit a help request and we'll get in touch shortly.
        </h1>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form class="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              class="w-full border-b-2 border-solid border-heading bg-background p-5 text-heading outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Adress"
              class="w-full border-b-2 border-solid border-heading bg-background p-5 text-heading outline-none"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              class="w-full border-b-2 border-solid border-heading bg-background p-5 text-heading outline-none"
              required
            />
            <input
              type="text"
              placeholder="Title"
              class="w-full border-b-2 border-solid border-heading bg-background p-5 text-heading outline-none"
              required
            />
            <Textarea
              placeholder="Message"
              class="w-full border-b-2 border-solid border-heading bg-background p-5 text-heading outline-none"
              required
            ></Textarea>
            <div>
              <input type="checkbox" id="stay" />
              <label for="stay" class="ml-2 text-heading"
                >Stay up-to-date with announcements and updates to our
                API</label
              >
            </div>
            <button
              class="btn-secondary text-primary hover:bg-primary hover:text-neutral"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div class="place-self-center">
            <h2 class="mb-8 font-secondary text-2xl text-heading">
              Join the thousands of innovators already building with us
            </h2>
            <Companies />
          </div>
        </div>
      </div>
    </section>
    <EmailInputSection />
  </div>
</template>

<script setup>
import Companies from "~/components/Companies";
import EmailInputSection from "~/components/EmailInputSection";
</script>
