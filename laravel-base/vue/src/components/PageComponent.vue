<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        <slot name="header"></slot>
      </h1>
      <slot name="headerSecond"></slot>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <slot name="body"></slot>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const user = store.state.user;

if (user.name === null) {
  router.push({
    name: "Login",
  });
}
</script>

<style></style>
