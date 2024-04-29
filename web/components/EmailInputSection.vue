<template>
  <section class="py-12">
    <div
      class="wrapper flex flex-col items-center justify-between gap-6 lg:flex-row"
    >
      <h2 class="font-secondary text-5xl text-heading">Ready to start?</h2>
      <form class="relative w-full max-w-[28rem]">
        <input
          type="email"
          class="solid w-full rounded-[100px] border border-neutral p-5 text-heading shadow-lg mb-6"
          placeholder="Email address"
          required
        />
        <button class="btn lg:absolute lg:right-1 lg:top-[5px]">
          Schedule a demo
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>