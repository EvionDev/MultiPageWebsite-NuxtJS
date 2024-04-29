<template>
  <div
    class="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 py-12 lg:grid-cols-3"
  >
    <img
      :src="`/_nuxt/assets/img/${photo.name}`"
      v-for="photo in photos"
      :key="photo.id"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Photo {
  id: number;
  name: string;
}

const photos = ref<Photo[]>([
  { id: 1, name: "tesla.svg" },
  { id: 2, name: "microsoft.svg" },
  { id: 3, name: "hp.svg" },
  { id: 4, name: "oracle.svg" },
  { id: 5, name: "google.svg" },
  { id: 6, name: "nvidia.svg" },
]);
</script>
