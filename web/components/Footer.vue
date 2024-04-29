<template>
  <footer class="relative overflow-hidden bg-primary py-12">
    <div class="wrapper relative z-10">
      <div class="flex flex-col items-center gap-12 lg:flex-row">
        <NuxtLink to="/"
          ><img
            src="../assets/img/logo.svg"
            alt="PayApi"
            class="brightness-[100]"
        /></NuxtLink>
        <nav class="flex flex-col gap-8 lg:flex-row">
          <NuxtLink to="/pricing">Pricing</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
        <div class="lg:ml-auto">
          <div class="flex items-center gap-x-4">
            <a
              v-for="social in socials"
              :key="social.id"
              :href="social.link"
              target="_blank"
              ><i :class="social.icon" class="text-3xl"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="z-1 absolute -right-40 -top-8 h-[450px] w-[450px] rounded-full bg-[#1F2C38]"
    ></div>
  </footer>
</template>

<script setup lang="ts">
interface social {
  id: number;
  link: string;
  icon: string;
}

const socials = ref<social[]>([
  {
    id: 1,
    link: "/",
    icon: "bx bxl-facebook-square",
  },
  { id: 2, link: "/", icon: "bx bxl-twitter" },
  {
    id: 3,
    link: "/",
    icon: "bx bxl-linkedin-square",
  },
]);
</script>
