<template>
  <main>
    <section class="pt-24">
      <div class="wrapper">
        <h1 class="mb-9 font-secondary text-5xl text-heading lg:text-7xl">
          Pricing
        </h1>
        <div class="grid grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          <PricingPlan />
        </div>
      </div>
    </section>
    <EmailInputSection />
  </main>
</template>

<script setup lang="ts">
import PricingPlan from "~/components/PricingPlan.vue";
import EmailInputSection from "~/components/EmailInputSection";
</script>
