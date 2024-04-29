<template>
  <section class="py-12">
    <div class="wrapper">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div class="text-center" v-for="benefit in benefits" :key="benefit.id">
          <img
            :src="`/_nuxt/assets/img/${benefit.image}`"
            class="mx-auto mb-12"
          />
          <h3 class="mb-6 text-2xl font-semibold text-primary">
            {{ benefit.title }}
          </h3>
          <p class="text-md mb-9 leading-7 text-primary">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Benefit {
  id: number;
  image: string;
  title: string;
  description: string;
}

const benefits = ref<Benefit[]>([
  {
    id: 1,
    image: "money.svg",
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
  },
  {
    id: 2,
    image: "chart.svg",
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    id: 3,
    image: "card.svg",
    title: "Consumer Payments",
    description:
      "It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. ",
  },
]);
</script>
