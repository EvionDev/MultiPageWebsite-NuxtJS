<template>
  <div>
    <section class="py-24">
      <div
        class="wrapper grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2"
      >
        <div class="order-2 lg:order-1">
          <h1
            class="mb-9 text-center font-secondary text-3xl text-heading lg:text-left lg:text-7xl"
          >
            Start building with our APIs for absolutely free.
          </h1>
          <form class="relative w-full max-w-[28rem]">
            <input
              type="email"
              class="solid mb-6 w-full rounded-[100px] border border-neutral p-5 text-heading shadow-lg"
              placeholder="Email address"
              required
            />
            <button class="btn lg:absolute lg:right-1 lg:top-[5px]">
              Schedule a demo
            </button>
          </form>
          <p class="ml-1 mt-4 text-header">
            Have any question?
            <NuxtLink to="/contact" class="underline">Contact us</NuxtLink>
          </p>
        </div>
        <div class="order-1 w-[200px] lg:order-2 lg:w-auto lg:justify-self-end">
          <img src="/_nuxt/assets/img/phone.webp" alt="PayAPI app screen" />
        </div>
      </div>
    </section>
    <section class="relative overflow-hidden bg-primary py-36">
      <div
        class="z-1 absolute -left-40 -top-48 h-[550px] w-[550px] rounded-full bg-[#1F2C38]"
      ></div>
      <div class="wrapper relative z-10">
        <div class="grid grid-cols-1 gap-9 lg:grid-cols-2">
          <div class="order-2 lg:order-1">
            <h1 class="mb-7 font-secondary text-5xl">Who we work with</h1>
            <p class="mb-9 leading-7">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <NuxtLink to="/about"
              ><button
                class="btn-secondary hover:bg-neutral hover:text-primary"
              >
                About us
              </button></NuxtLink
            >
          </div>
          <Companies class="order-1 brightness-[100] lg:order-2" />
        </div>
      </div>
    </section>
    <section class="relative overflow-hidden pb-12 pt-24">
      <div
        class="z-1 absolute -bottom-8 -right-80 h-[750px] w-[750px] overflow-x-hidden rounded-full bg-[#D0D9E2]"
      ></div>
      <div class="wrapper relative z-10">
        <div class="flex flex-col gap-12">
          <div class="flex flex-col items-center gap-6 lg:flex-row">
            <img src="/_nuxt/assets/img/code.svg" alt="Frontend code" />
            <div class="text-center lg:text-left">
              <h2 class="mb-7 font-secondary text-5xl text-primary">
                Easy to implement
              </h2>
              <p class="leading-7 text-primary">
                Our API comes with just a few lines of code. You'll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-6 lg:flex-row-reverse">
            <img src="/_nuxt/assets/img/phone2.svg" alt="Frontend code" />
            <div class="text-center lg:text-left">
              <h2 class="mb-7 font-secondary text-5xl text-primary">
                Simple UI & UX
              </h2>
              <p class="leading-7 text-primary">
                Our pre-built form is easy to integrate in your app or website's
                checkout flow and designed to optimize conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Benefits />
    <EmailInputSection />
  </div>
</template>

<script setup>
import Companies from "~/components/Companies";
import Benefits from "~/components/Benefits";
import EmailInputSection from "~/components/EmailInputSection";
</script>
