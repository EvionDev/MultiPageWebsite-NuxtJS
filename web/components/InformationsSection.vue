<template>
  <div class="wrapper">
    <div class="flex flex-col gap-10 py-24 text-center lg:text-left">
      <div
        class="flex flex-col items-center gap-8 lg:flex-row lg:items-start"
        v-for="info in data"
        :key="info.id"
      >
        <h2
          class="flex shrink-0 grow-0 basis-[20%] font-secondary text-3xl text-primary"
        >
          {{ info.title }}
        </h2>
        <p class="text-xl leading-7 text-primary">
          {{ info.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
