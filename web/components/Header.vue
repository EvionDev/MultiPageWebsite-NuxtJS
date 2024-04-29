<template>
  <header class="py-12">
    <div class="wrapper relative">
      <div class="flex items-center gap-x-12 text-header">
        <NuxtLink to="/"
          ><img src="../assets/img/logo.svg" alt="PayApi"
        /></NuxtLink>
        <nav class="hidden gap-x-8 lg:flex">
          <NuxtLink to="/pricing">Pricing</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
        <NuxtLink to="/contact" class="btn ml-auto hidden lg:block"
          >Schedule a demo</NuxtLink
        >
        <span
          class="ml-auto cursor-pointer text-3xl lg:hidden"
          @click="toggleMenu"
        >
          <i :class="[open ? 'bx bx-x' : 'bx bx-menu']"></i>
        </span>
        <div
          class="right-2 top-14 rounded-md bg-primary p-6 text-neutral lg:hidden"
          :class="[open ? 'absolute' : 'hidden']"
        >
          <div class="flex flex-col items-center gap-6">
            <NuxtLink to="/pricing">Pricing</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <NuxtLink to="/contact" class="btn">Schedule a demo</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";

const open = ref(false);

const route = useRoute();

watch(route, () => {
  open.value = false;
});

const toggleMenu = () => {
  open.value = !open.value;
};
</script>

<style scoped></style>
