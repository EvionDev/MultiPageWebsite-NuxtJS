<template>
  <div>
    <section class="pt-24">
      <div class="wrapper">
        <h1
          class="mb-9 max-w-[900px] text-center font-secondary text-3xl font-bold text-heading lg:text-left lg:text-7xl"
        >
          We empower innovators by delivering access to the financial system
        </h1>
      </div>
    </section>
    <InformationsSection :data="visionData" />
    <section class="relative">
      <div
        class="absolute -left-44 -top-24 -z-[1] h-[450px] w-[450px] rounded-full bg-[#D0D9E2]"
      ></div>
      <img
        src="/_nuxt/assets/img/team-members.jpg"
        alt="Team Members"
        class="w-full"
      />
    </section>
    <section class="pt-24">
      <div class="wrapper">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div
            class="flex flex-col border-y border-solid border-[#9aa4ad] py-8"
            v-for="stat in companyStats"
            :key="stat.id"
          >
            <h2 class="mb-4 text-2xl text-primary">
              {{ stat.title }}
            </h2>
            <p class="font-secondary text-7xl text-secondary">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <InformationsSection :data="cultureData" />
    <EmailInputSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InformationsSection from "~/components/InformationsSection.vue";
import EmailInputSection from "~/components/EmailInputSection";

interface InfoData {
  id: number;
  title: string;
  description: string;
}

const companyStats = ref<InfoData[]>([
  {
    id: 1,
    title: "Team Members",
    description: "300+",
  },
  {
    id: 2,
    title: "Offices in the US",
    description: "3",
  },
  {
    id: 3,
    title: "Transactions analyzed",
    description: "10M+",
  },
]);

const visionData = ref<InfoData[]>([
  {
    id: 1,
    title: "Our Vision",
    description:
      "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
  },
  {
    id: 2,
    title: "Our Business",
    description:
      "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
  },
]);

const cultureData = ref<InfoData[]>([
  {
    id: 1,
    title: "The Culture",
    description:
      "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
  },
  {
    id: 2,
    title: "The People",
    description:
      "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
  },
]);
</script>
