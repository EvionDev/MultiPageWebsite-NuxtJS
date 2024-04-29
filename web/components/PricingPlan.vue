<template>
  <div
    class="p-4"
    v-for="pricingItem in pricingList"
    :key="pricingItem.id"
    :class="{ 'bg-[#f8ecf1]': pricingItem.title === 'Basic Plan' }"
  >
    <h2 class="mb-6 font-secondary text-4xl text-secondary">
      {{ pricingItem.title }}
    </h2>
    <p class="mb-10 text-primary">
      {{ pricingItem.description }}
    </p>
    <p class="text-bold mb-6 font-secondary text-6xl font-bold text-primary">
      ${{ pricingItem.price }}
    </p>
    <ul class="flex flex-col gap-4 border-y border-solid border-[#9aa4ad] py-8">
      <li
        class="flex items-center gap-2 text-primary"
        v-for="item in pricingItem.detailList"
      >
        <i :class="getIconClasses(item.check)" class="bx text-2xl"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <NuxtLink to="/contact"
      ><button
        class="btn-secondary text-primary hover:bg-primary hover:text-neutral"
      >
        Request Access
      </button></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
interface PricingItem {
  id: number;
  title: string;
  description: string;
  price: string;
  detailList: DetailItem[];
}

interface DetailItem {
  id: number;
  check: boolean;
  title: string;
}

const pricingList = ref<PricingItem[]>([
  {
    id: 1,
    title: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests",
    price: "0.00",
    detailList: [
      {
        id: 1,
        check: true,
        title: "Anonymous",
      },
      {
        id: 2,
        check: true,
        title: "Auth",
      },
      {
        id: 3,
        check: true,
        title: "Indentity",
      },
      {
        id: 4,
        check: false,
        title: "Investiments",
      },
      {
        id: 5,
        check: false,
        title: "Assets",
      },
      {
        id: 6,
        check: false,
        title: "Liabilities",
      },
      {
        id: 7,
        check: false,
        title: "Income",
      },
    ],
  },
  {
    id: 2,
    title: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    price: "249.00",
    detailList: [
      {
        id: 1,
        check: true,
        title: "Anonymous",
      },
      {
        id: 2,
        check: true,
        title: "Auth",
      },
      {
        id: 3,
        check: true,
        title: "Indentity",
      },
      {
        id: 4,
        check: true,
        title: "Investiments",
      },
      {
        id: 5,
        check: true,
        title: "Assets",
      },
      {
        id: 6,
        check: false,
        title: "Liabilities",
      },
      {
        id: 7,
        check: false,
        title: "Income",
      },
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "499.00",
    detailList: [
      {
        id: 1,
        check: true,
        title: "Anonymous",
      },
      {
        id: 2,
        check: true,
        title: "Auth",
      },
      {
        id: 3,
        check: true,
        title: "Indentity",
      },
      {
        id: 4,
        check: true,
        title: "Investiments",
      },
      {
        id: 5,
        check: true,
        title: "Assets",
      },
      {
        id: 6,
        check: true,
        title: "Liabilities",
      },
      {
        id: 7,
        check: true,
        title: "Income",
      },
    ],
  },
]);

const getIconClasses = (check: boolean) => {
  return {
    "bx-check": check,
    "bx-x": !check,
    "text-secondary": check,
    "text-header": !check,
  };
};
</script>