<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2
      class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
    >
      Registration
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit="registration">
      <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900"
          >Login</label
        >
        <div class="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            required=""
            v-model="user.name"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            v-model="user.password"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
            >Repit password</label
          >
        </div>
        <div class="mt-2">
          <input
            id="passwordRepit"
            name="passwordRepit"
            type="password"
            required=""
            v-model="user.password_confirmation"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Already registered?
      {{ " " }}
      <router-link
        :to="{ name: 'Login' }"
        href="#"
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >Login</router-link
      >
    </p>
  </div>
</template>

<style scoped></style>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const user = {
  name: "",
  password: "",
  password_confirmation: "",
};
const store = useStore();
const router = useRouter();

function registration(params) {
  params.preventDefault();
  store
    .dispatch("registartion", user)
    .then((res) => {
      router.push({ name: "Map" });
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      if (error.response.data.message !== undefined) alert(error.response.data.message);
      else {
        alert(error.response.data.errors.name + error.response.data.errors.password);
      }
    });
}
</script>

<style scoped></style>
